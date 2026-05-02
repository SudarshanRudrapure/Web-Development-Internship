
const state = {
  name:     false,
  email:    false,
  password: false,
  phone:    false,
  domain:   false,
  terms:    false
};

function setField(id, valid, msg, type = "error") {
  const el   = document.getElementById(id);
  const hint = document.getElementById(id + "-hint");

  // Toggle CSS validation classes
  el.classList.remove("valid", "invalid");
  el.classList.add(valid ? "valid" : "invalid");

  // Show hint message
  hint.textContent = msg;
  hint.className   = "hint show " + (valid ? "success" : type);

  // Update sidebar rule dot
  setRule(id, valid);

  updateProgress();
  updatePreview();
}

function setRule(field, valid) {
  const dot = document.getElementById("rdot-" + field);
  if (!dot) return;
  dot.className   = "rule-dot " + (valid ? "pass" : "fail");
  dot.textContent = valid ? "✓" : "✗";
  state[field]    = valid;
}


function updateProgress() {
  const total  = Object.keys(state).length;
  const passed = Object.values(state).filter(Boolean).length;
  const pct    = Math.round((passed / total) * 100);

  // Update text
  document.getElementById("progress-pct").textContent   = pct + "%";
  document.getElementById("progress-label").textContent =
    pct === 100 ? "All fields complete ✓" : `${passed} of ${total} fields valid`;

  // Animate SVG ring (circumference of r=35 circle ≈ 220)
  const circumference = 2 * Math.PI * 35;
  const offset = circumference - (pct / 100) * circumference;
  const ring   = document.getElementById("circle-prog");
  const text   = document.getElementById("progress-pct");

  ring.style.strokeDashoffset = offset;

  // Color changes with progress
  const color = pct === 100 ? "#16a34a" : pct >= 60 ? "#d97706" : "#2d4af0";
  ring.style.stroke = color;
  text.style.color  = color;
}


function updatePreview() {
  const get = (id) => document.getElementById(id)?.value || "—";
  document.getElementById("pv-name").textContent    = get("name")    || "—";
  document.getElementById("pv-email").textContent   = get("email")   || "—";
  document.getElementById("pv-phone").textContent   = get("phone")   || "—";
  document.getElementById("pv-domain").textContent  = get("domain")  || "—";
  document.getElementById("pv-college").textContent = get("college") || "—";
}

function validateName() {
  const val = document.getElementById("name").value.trim();
  if (val.length === 0) return;

  const ok = val.length >= 3 && /^[a-zA-Z\s]+$/.test(val);
  const msg = ok
    ? "✓ Looks good!"
    : val.length < 3
      ? "Name must be at least 3 characters."
      : "Only letters and spaces are allowed.";

  setField("name", ok, msg);
}


function validateEmail() {
  const val = document.getElementById("email").value.trim();
  if (!val) return;

  const ok  = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(val);
  const msg = ok
    ? "✓ Valid email address."
    : "Enter a valid email (e.g. you@domain.com).";

  setField("email", ok, msg);
}


function validatePassword() {
  const val   = document.getElementById("password").value;
  const fill  = document.getElementById("strength-fill");
  const label = document.getElementById("strength-label");
  const score = document.getElementById("strength-score");

  // Calculate strength score (0–4)
  let strength = 0;
  if (val.length >= 8)          strength++;  // length
  if (/[A-Z]/.test(val))        strength++;  // uppercase
  if (/[0-9]/.test(val))        strength++;  // digit
  if (/[^A-Za-z0-9]/.test(val)) strength++;  // special char

  // Strength level definitions
  const levels = [
    { width: "0%",   color: "#e5e7eb", text: "Too short", score: "" },
    { width: "25%",  color: "#ef4444", text: "Weak",      score: "25%" },
    { width: "50%",  color: "#f59e0b", text: "Fair",      score: "50%" },
    { width: "75%",  color: "#3b82f6", text: "Good",      score: "75%" },
    { width: "100%", color: "#16a34a", text: "Strong",    score: "100%" }
  ];

  const lvl = levels[strength];
  fill.style.width      = lvl.width;
  fill.style.background = lvl.color;
  label.textContent     = val.length ? lvl.text : "Strength";
  score.textContent     = lvl.score;

  // Only validate if user has started typing
  if (val.length > 0) {
    const ok  = val.length >= 8 && /[A-Z]/.test(val) && /[0-9]/.test(val);
    const msg = ok
      ? "✓ Password meets all requirements."
      : "Need 8+ characters, 1 uppercase letter, and 1 number.";
    setField("password", ok, msg);
  }
}


function validatePhone() {
  const input = document.getElementById("phone");
  const val   = input.value.replace(/\D/g, "");  // strip non-digits
  input.value = val;                              // clean the field

  if (!val) return;

  const ok  = /^\d{10}$/.test(val);
  const msg = ok
    ? "✓ Valid phone number."
    : `${val.length}/10 digits entered — need exactly 10.`;

  setField("phone", ok, msg);
}

function validateDomain() {
  const val = document.getElementById("domain").value;
  const ok  = val !== "";
  const msg = ok
    ? `✓ "${val}" selected.`
    : "Please select an internship domain.";

  setField("domain", ok, msg);
}

function checkTerms() {
  const checked = document.getElementById("terms").checked;
  const hint    = document.getElementById("terms-hint");
  const dot     = document.getElementById("rdot-terms");

  hint.textContent = checked
    ? "✓ Thank you for agreeing."
    : "You must agree to the terms to continue.";
  hint.className = "hint show " + (checked ? "success" : "error");

  dot.className   = "rule-dot " + (checked ? "pass" : "fail");
  dot.textContent = checked ? "✓" : "✗";
  state.terms     = checked;

  updateProgress();
}


function countBio() {
  const len  = document.getElementById("bio").value.length;
  const hint = document.getElementById("bio-count");
  hint.textContent  = `${len} / 200 characters`;
  hint.style.color  = len > 180 ? "var(--warn)" : "var(--muted)";
}


function submitForm() {
  // Run all validators to highlight any untouched fields
  validateName();
  validateEmail();
  validatePassword();
  validatePhone();
  validateDomain();
  if (!document.getElementById("terms").checked) checkTerms();

  const allValid = Object.values(state).every(Boolean);

  if (!allValid) {
    // Flash error on button
    const btn = document.getElementById("submit-btn");
    btn.textContent       = "⚠ Fix the errors above first";
    btn.style.background  = "#dc2626";
    setTimeout(() => {
      btn.textContent      = "Submit Registration →";
      btn.style.background = "";
    }, 2500);
    return;
  }

  // Collect form values
  const name    = document.getElementById("name").value;
  const email   = document.getElementById("email").value;
  const domain  = document.getElementById("domain").value;
  const college = document.getElementById("college").value || "—";

  // Populate and show success toast
  document.getElementById("toast-data").innerHTML =
    `Name: ${name}<br>Email: ${email}<br>Domain: ${domain}<br>College: ${college}`;
  document.getElementById("success-toast").classList.add("show");

  // Update button to success state
  const btn = document.getElementById("submit-btn");
  btn.textContent      = "✓ Registered Successfully!";
  btn.style.background = "#16a34a";
}


(function init() {
  const circumference = 2 * Math.PI * 35;
  const ring = document.getElementById("circle-prog");
  ring.style.strokeDasharray  = circumference;
  ring.style.strokeDashoffset = circumference;
})();
