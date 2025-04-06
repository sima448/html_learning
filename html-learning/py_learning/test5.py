def count(s):
    # words = s.split()  # Split the string into words
    # return "&".join(words)  # Join the words with "&"
     str = s.split()
     for s in str:
        s = "&".join(str)


        return s
print(count("Python is fun to learn."))
