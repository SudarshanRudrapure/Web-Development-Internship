import pandas as pd

import matplotlib.pyplot as plt
df = pd.read_csv('btc_gold_price.csv')
print(df.shape)
print(df.head())
print(df.describe())
df.info()
df.set_index('Year').plot()

plt.show()
