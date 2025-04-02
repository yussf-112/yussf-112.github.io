import tkinter as tk
import math

# Functions from your code
def p(n):
    return int((math.factorial(n-1) + 1) / n)

def alpha(key):
    inter = str(key)
    res = ""
    for i in inter:
        res += chr(int(i) + 97)
    return res

def expm(mssg):
    na = 'abcdefghijklmnopqrstuvwxyz'
    ea = 'abocjzdgipetsvfmnulxykqrhw'
    m = str.maketrans(na, ea)
    tm = mssg.translate(m)
    return tm

def dexpm(mssg):
    ea = 'abcdefghijklmnopqrstuvwxyz'
    na = 'abocjzdgipetsvfmnulxykqrhw'
    m = str.maketrans(ea, na)
    tm = mssg.translate(m)
    return tm

keygen = {
    'a': 2,   # res(1)
    'b': 7,   # res(2)
    'c': 20,  # res(3)
    'd': 54,  # res(4)
    'e': 148, # res(5)
    'f': 403, # res(6)
    'g': 96,  # res(7)
    'h': 980, # res(8)
    'i': 103, # res(9)
    'j': 26,  # res(10)
    'k': 874, # res(11)
    'l': 754, # res(12)
    'm': 413, # res(13)
    'n': 604, # res(14)
    'o': 17,  # res(15)
    'p': 110, # res(16)
    'q': 952, # res(17)
    'r': 969, # res(18)
    's': 300, # res(19)
    't': 195, # res(20)
    'u': 734, # res(21)
    'v': 348, # res(22)
    'w': 987, # res(23)
    'x': 816, # res(24)
    'y': 846, # res(25)
    'z': 40   # res(26)
}

def pm(mssg, n):
    mssg = mssg.lower()
    interm = [str(keygen.get(char, char) * p(n)) for char in mssg]
    pmmssg = ' '.join(interm)
    return pmmssg

def requiem(mssg, n):
    key = alpha(p(n))
    req = pm(expm(mssg), n)
    mmm = pm(key, 2) + ' - ' + pm(str(n), 2) + ' - ' + req
    return mmm

inverse_keygen = {v: k for k, v in keygen.items()}

def rpm(cym, n):
    cyn = cym.split()
    intnm = [inverse_keygen.get(int(num) // n, '?') for num in cyn]
    nm = ''.join(intnm)
    return nm

def dereq(mssg):
    parts = mssg.split(' - ')
    if len(parts) != 3:
        return "Invalid format"
    
    key_pm = parts[0]
    n = int(parts[1])
    encrypted_message = parts[2]

    key = alpha(p(n))
    decrypted_message = rpm(encrypted_message, n)
    decrypted_message = dexpm(decrypted_message)
    
    return decrypted_message

# Create the main application window
root = tk.Tk()
root.title("Encryption and Decryption")

# Encryption Column
encryption_frame = tk.Frame(root)
encryption_frame.grid(row=0, column=0, padx=10, pady=10)

encryption_label = tk.Label(encryption_frame, text="Encryption")
encryption_label.pack()

encryption_input = tk.Entry(encryption_frame, width=40)
encryption_input.pack(pady=5)

encryption_n_label = tk.Label(encryption_frame, text="Enter n:")
encryption_n_label.pack(pady=5)

encryption_n = tk.Entry(encryption_frame, width=10)
encryption_n.pack(pady=5)

encryption_button = tk.Button(encryption_frame, text="Encrypt", command=lambda: update_output(encryption_input, encryption_output, encryption_n.get(), requiem))
encryption_button.pack(pady=5)

encryption_output = tk.Label(encryption_frame, text="", wraplength=300)
encryption_output.pack(pady=5)

# Decryption Column
decryption_frame = tk.Frame(root)
decryption_frame.grid(row=0, column=1, padx=10, pady=10)

decryption_label = tk.Label(decryption_frame, text="Decryption")
decryption_label.pack()

decryption_input = tk.Entry(decryption_frame, width=40)
decryption_input.pack(pady=5)

decryption_n_label = tk.Label(decryption_frame, text="Enter n:")
decryption_n_label.pack(pady=5)

decryption_n = tk.Entry(decryption_frame, width=10)
decryption_n.pack(pady=5)

decryption_button = tk.Button(decryption_frame, text="Decrypt", command=lambda: update_output(decryption_input, decryption_output, decryption_n.get(), dereq))
decryption_button.pack(pady=5)

decryption_output = tk.Label(decryption_frame, text="", wraplength=300)
decryption_output.pack(pady=5)

def update_output(input_widget, output_widget, n_value, function):
    message = input_widget.get()
    try:
        n = int(n_value)
        result = function(message, n)
        output_widget.config(text=result)
    except ValueError:
        output_widget.config(text="Invalid input for n.")

# Run the application
root.mainloop()
