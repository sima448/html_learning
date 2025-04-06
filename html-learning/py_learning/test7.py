# def reverse_number():
#   num = int(input("Enter a number: "))
#   reverse = 0
#   while num != 0:
#     remainder = num % 10
#     reverse = (reverse * 10) + remainder 
#     num = num //10
#   print("Reverse:", reverse)
# reverse_number()
def reverse_number():
  """This function reverses the digits of an integer."""
  num = int(input("Enter a number: "))
  reverse = 0
  while num > 0:  # Corrected condition to handle negative numbers
    remainder = num % 10
    reverse = (reverse * 10) + remainder
    num = num // 10
  print("Reverse:", reverse)

reverse_number() 