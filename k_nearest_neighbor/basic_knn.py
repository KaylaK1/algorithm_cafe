"""
source: https://www.geeksforgeeks.org/implementation-k-nearest-neighbors/

Given a data set of items, where each has numerically valued features.
If we have a count of features n, we can represent each item as points in an n-dimensional
grid. 
Given a new item, we can calculate it's distance from the other items in the set.
Picking the "K" closest neighbors leads to the new points classification.

How-to calculate the distances between items:
Euclidean: If values are real
Hamming: Values are categorical or binary
    - Distance between two strings or vectors of equal length 
    - Is the number of positions at which the corresponding symbols are different
    - - Measures the minimal number of substitutions required to change one string into the other
"""
"""
Algorithm:

1. Find distance between new item and all other items
2. Pick k shorter distances
3. Pick the most common class in these k distances
4. That class is where we will classify the new item

Input data: 
peopleData.txt: (Height, Weight, Age, Class)
"""

# for pow and sqrt
import math
from random import shuffle

# Read Data
def ReadData(fileName):
    f = open('peopleData.txt', 'r')
    lines = f.read().splitlines()
    f.close()

    # Splits the first line by commas, removes the first element,
    features = lines[0].split(', ')[:-1]

    # Save the items into a list (items), whose elements are dictionaries for each item.
    # Key:Value - Feature + Class
    # Shuffle is done as a safety in case the items are in a weird order
    items = []

    for i in range(1, len(lines)):

        line = lines[i].split(', ')

        itemFeatures = {"Class" : line[-1]}

        # Iterate through the features
        for j in range(len(features)):

            # Get the feaure at index j
            f = features[j]

            # The first item in the line is the class - so skip
            v = float(line[j])

            # Add feature to dict
            itemFeatures[f] = v
        # Append temp dict to items
        items.append(itemFeatures)

    shuffle(items)
    
    return items
