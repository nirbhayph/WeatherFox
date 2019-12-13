import json
my_dict = ""
new_json = []
with open('city.list.json', 'r', encoding='utf-8') as f:
    my_dict = json.load(f)

for element in my_dict:
    print(element)
    if(element['country'] == "US" or element['country'] == "FR" or element['country'] == "RU"):
        new_json.append(element)

with open('new_json.json', "w") as new:
    json.dump(new_json, new)