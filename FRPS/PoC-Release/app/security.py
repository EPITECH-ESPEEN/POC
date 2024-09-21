from hashlib import sha1, sha224, sha256, sha384, sha512, md5
from itertools import product
import random
import os

ROTATION_AMOUNT = 2 # The bigger the more secure, but the longer it takes to authenticate / deny authentication

FUNCTIONS = (sha1, sha224, sha256, sha384, sha512, md5)

# Amount of checks to deny a login => len(FUNCTIONS) ^ ROTATION_AMOUT

def hash_data(data: bytes) -> str:
    random.seed(int.from_bytes(os.urandom(8), "little"))
    for _ in range(ROTATION_AMOUNT):
        data = FUNCTIONS[random.randint(0, len(FUNCTIONS) - 1)](data).hexdigest().encode()
    return sha512(data).hexdigest()

def compare_data(data: bytes, result: str) -> bool:
    for rotation in product(FUNCTIONS, repeat=ROTATION_AMOUNT):
        temp_data = data
        for function in rotation:
            temp_data = function(temp_data).hexdigest().encode()
        if sha512(temp_data).hexdigest() == result:
            return True
    return False