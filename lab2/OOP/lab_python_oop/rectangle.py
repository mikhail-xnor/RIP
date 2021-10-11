import figure as f
import color as c

class Rectangle(f.Figure):

    figure_type = "Rectangle"

    @classmethod
    def get_figure_type(cls):
        return cls.figure_type

    def __init__(self, color, width, height):
        super().__init__()
        self.__color = c.Color(color)
        self.__width = width
        self.__height = height
        
    @property
    def color(self):
        return self.__color
    
    @color.setter
    def color(self, color):
        self.__color = c.Color(color)
    
    @property
    def width(self):
        return self.__width
    
    @width.setter
    def width(self, width):
        if width > 0:
            self.__width = width
        else:
            raise ValueError
    
    @property
    def height(self):
        return self.__height
    
    @height.setter
    def height(self, height):
        if height > 0:
            self.__height = height
        else:
            raise ValueError
    
    def area(self):
        return self.__width * self.__height
        
    def repr(self):
        print('FigureType: {}, width: {}, height: {}, color: {}, area: {}!'.format(self.get_figure_type(), self.__width, self.__height, self.__color.color, self.area()))