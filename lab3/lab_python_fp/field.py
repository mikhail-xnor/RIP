# Пример:
# goods = [
#    {'title': 'Ковер', 'price': 2000, 'color': 'green'},
#    {'title': 'Диван для отдыха', 'price': 5300, 'color': 'black'}
# ]
# field(goods, 'title') должен выдавать 'Ковер', 'Диван для отдыха'
# field(goods, 'title', 'price') должен выдавать {'title': 'Ковер', 'price': 2000}, {'title': 'Диван для отдыха', 'price': 5300}

def field(items, *args):
    args_count = len(args)
    assert args_count > 0
    # Необходимо реализовать генератор
    if args_count == 1:
        for i in items:
            res = i.get(args[0])
            if res != None:
                yield res
    else:
        for i in items:
            res = {key: val for key, val in i.items() if key in args and val != None}
            if res != {}:
                yield res

if __name__ == "__main__":
    goods = [
        {'title': 'Ковер', 'price': 2000, 'color': 'green'},
        {'title': 'Диван для отдыха', 'price': 5300, 'color': None},
        {'title': None, 'price': None, 'color': None}
    ]
    for i in field(goods, 'title'):
        print(i)
    for i in field(goods, 'color'):
        print(i)
    for i in field(goods, 'title', 'price'):
        print(i)
    for i in field(goods, 'title', 'color'):
        print(i)