from figure import Figure
from color import Color
import math

class Circle(Figure):

    figure_type = "Circle"

    @classmethod
    def get_figure_type(cls):
        return cls.figure_type

    def __init__(self, color, radius):
        super().__init__()
        self.__color = Color(color)
        self.__radius = radius
    
    @property
    def color(self):
        return self.__color
    
    @color.setter
    def color(self, color):
        self.__color = Color(color)
    
    @property
    def radius(self):
        return self.__radius
    
    @radius.setter
    def radius(self, radius):
        if radius > 0:
            self.__radius = radius
        else:
            raise ValueError
    
    def area(self):
        return math.pi * self.__radius ** 2
    
    def repr(self):
        print('FigureType: {}, radius: {}, color: {}, area: {}!'.format(self.get_figure_type(), self.__radius, self.__color.color, self.area()))
    
    