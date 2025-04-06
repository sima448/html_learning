import tkinter as t
m=t.Tk()
def Add():
 a=int(tv1.get())
 b=int(tv2.get())
 s=a+b
 l=t.Label(m, text = s)
 l.pack()
tv1=t.StringVar()
tv2=t.StringVar()
b=t.Button(m,text="Add",bg="red",command=Add)
b.pack()
e1=t.Entry(m,textVar=tv1)
e1.pack()
e2=t.Entry(m,textVar=tv2)
e2.pack()
m.mainloop()