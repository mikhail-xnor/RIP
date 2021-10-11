# Итератор для удаления дубликатов
class Unique(object):
    def __init__(self, items, **kwargs):
        self.ignore_case = kwargs.get('ignore_case') if len(kwargs) != 0 else False
        self.type = type(items)
        if self.type == list:
            self.items = items[:]
        else:
            self.items = items
        self.index = 0
        self.unique_values = set()
        # Нужно реализовать конструктор
        # В качестве ключевого аргумента, конструктор должен принимать bool-параметр ignore_case,
        # в зависимости от значения которого будут считаться одинаковыми строки в разном регистре
        # Например: ignore_case = True, Aбв и АБВ - разные строки
        #           ignore_case = False, Aбв и АБВ - одинаковые строки, одна из которых удалится
        # По-умолчанию ignore_case = False
        pass

    def check_elem(self, el):
        #print(el)
        if (el[:].lower() if self.ignore_case else el) not in self.unique_values:
            self.unique_values.add(el)
            return True
        return False

    def __next__(self):
        # Нужно реализовать __next__
        if self.type == list:
            while self.index < len(self.items):
                el = self.items[self.index]
                print(el)
                self.index += 1
                if self.check_elem(el):
                    return el
        else:
            for el in self.items:
                print(el)
                if self.check_elem(el):
                    return el
        raise StopIteration

    def __iter__(self):
        return self

if __name__ == '__main__':
    data = ['a', 'A', 'b', 'B', 'a', 'A', 'b', 'B']
    data2 = (i for i in data)
    x = 'A'
    print(x[:].lower(), x)
    for i in Unique(data):
        print(i, end=' ')
    print()
    for i in Unique(data, ignore_case=True):
        print(i, end=' ')
    print()
    for i in Unique(data2, ignore_case=True):
        print(i, end=' ')