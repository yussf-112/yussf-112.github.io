import math

def pwmm(n):
    return int((math.factorial(n-1) + 1) / n)

def reqkey(n):
    interexp1 = str(math.floor(math.exp(n)))
    interexp2 = "".join(reversed(interexp1))
    interexp3 = interexp2[:5]
    interexp4 = "".join(reversed(interexp3))
    res = ""
    for i in interexp4:
        res += chr(int(i) + 97)
    na = 'abcdefghijklmnopqrstuvwxyz'
    ea = 'abocjzdgipetsvfmnulxykqrhw'
    m = str.maketrans(na, ea)
    tm = res.translate(m)
    return tm

def requiem(mssg,n):
    key = reqkey(n)
    na = 'abcdefghijklmnopqrstuvwxyz0123456789 -'
    ea = 'ab5ocj9z6dg4i8p2et10sv3f7m nul-xykqrhw'
    m = str.maketrans(na, ea)
    cmssg = mssg.translate(m)
    cym = ""
    for i in range(len(cmssg)):
        cym = cym + cmssg[i] + cmssg[(len(mssg)-1)-i] + key[i % 5]
    return cym
    
def rrequiem(cymssg):
    cyrm = ""
    for i in range(len(cymssg)):
        if i % 3 == 0:
            cyrm += cymssg[i]
    na = 'abcdefghijklmnopqrstuvwxyz0123456789 -'
    ea = 'ab5ocj9z6dg4i8p2et10sv3f7m nul-xykqrhw'
    m = str.maketrans(ea, na)
    mssg = cyrm.translate(m)
    return mssg
    

print(requiem('we are all one',11))
print(rrequiem("3czc8phpiahgt4jc4zhapahi4cg4tjhazphp8cic3g"))
