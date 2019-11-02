# -*- coding: utf-8 -*-
"""
Created on Thu Sep 12 21:19:23 2019

@author: cbart
"""
import numpy as np
import matplotlib.pyplot as plt


# Plot of y = 20 + (x - 25)^2

# Generate a sequence of numbers from 15 to 35 with 100 steps in between
x = np.linspace(15, 35, 100)
# f(x) = (x-25)^2 + 20
y = 20 + (x - 25)**2

plt.grid()
plt.plot(x, y, marker="x")
