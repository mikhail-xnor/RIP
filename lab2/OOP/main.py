from lab_python_oop.circle import Circle
from lab_python_oop.rectangle import Rectangle
from lab_python_oop.square import Square
import numpy as np



# Press the green button in the gutter to run the script.
if __name__ == '__main__':
    rectangle = Rectangle('blue', 3, 3)
    circle = Circle('green', 3)
    square = Square('red', 3)
    rectangle.repr()
    circle.repr()
    square.repr()
    v_hor_np = np.array([1, 2])
    print(v_hor_np)





