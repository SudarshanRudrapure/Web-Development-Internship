from fastapi import FastAPI
 
import random
app = FastAPI()
data = {'fname': 'John', 'lname': 'Doe', 'age': 25, 'job_title': 'engineer', 'emp_id': 5}
@app.get('/')
async def root():
 return data
@app.get('/random')

async def rand_emp_id():
 rand:int = random.randint(0,50)
 data['emp_id']=rand
 return data
