import json

f = open('src/word_list_all.txt', 'r').read().split()
#print(f)
new_list = []

for word in f :
    #print(word)
    if len(word) == 8 :
        new_list.append(word)
        #print(word)

with open("output.json", "w") as f:
    json.dump(new_list, f)