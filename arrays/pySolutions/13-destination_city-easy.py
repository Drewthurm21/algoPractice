'''
You are given the array paths, where paths[i] = [cityAi, cityBi] means 
there exists a direct path from cityAi to cityBi. Return the destination city

Example 
input:
paths = [["London", "New York"], ["New York", "Lima"],["Lima", "Sao Paulo"]]

output:
"Sao Paulo"
'''


def find_destination(paths):
  map = {}
  visited = set()
  for cityA, cityB  in paths:
    map[cityA] = True
    visited.add(cityB)
  return [city for city in visited if city not in map][0]
  
paths = [["London", "New York"], ["New York", "Lima"],["Lima", "Sao Paulo"]]
print(find_destination(paths))