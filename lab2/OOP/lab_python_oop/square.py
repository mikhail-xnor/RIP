from rectangle import Rectangle

class Square(Rectangle): #Violation SOLID principles!!!

    figure_type = "Square"

    @classmethod
    def get_figure_type(cls):
        return cls.figure_type

    def __init__(self, color, side):
        super().__init__(color, side, side)
    """
    #@width.setter
    def width(self, width):
        if width > 0:
            self.__width = width
            self.__height = width
        else:
            raise ValueError
    
    #@height.setter
    def height(self, height):
        if height > 0:
            self.__height = height
            self.__width = height
        else:
            raise ValueError
    """
    def side(self):
        return self._Rectangle__height
    
    def side(self, side):
        if side > 0:
            self.__height = side
            self.__width = side
        else:
            raise ValueError
    
    def repr(self):
        print('FigureType: {}, side: {}, color: {}, area: {}!'.format(self.get_figure_type(), self._Rectangle__height, self.color.color, self.area()))
    