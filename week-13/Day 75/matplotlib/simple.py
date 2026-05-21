from matplotlib import pyplot as plt
x = [2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019, 2020, 2021, 2022, 2023]

y1 = [0.09, 0.30, 5.28, 13.30, 754.22, 314.25, 434.33, 998.33, 13657.20, 3843.52, 7200.17, 29374.15,
47686.81, 16625.08]

y2 = [1070, 1319, 1727, 1670, 1242, 1288, 1156, 1213, 1345, 1302, 1573, 1864, 1837, 1932]
fig, ax1=plt.subplots()
ax2 = ax1.twinx()
ax1.plot(x, y1, color='g')
ax1.plot(x, y2, color='b')
ax1.set_xlabel('Year')
ax1.set_ylabel('Bitcoin', color = 'g')
ax2.set_ylabel('Gold', color = 'b')

plt.show()