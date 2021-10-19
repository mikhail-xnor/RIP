class Driver:
    """Водитель"""
    def __init__(self, id, fio, sal, park_id):
        self.id = id
        self.fio = fio
        self.sal = sal
        self.park_id = park_id


class CarPark:
    """Автопарк"""
    def __init__(self, id, name):
        self.id = id
        self.name = name


class DriverPark:
    """Водители автопарка"""
    def __init__(self, park_id, driver_id):
        self.park_id = park_id
        self.driver_id = driver_id


def main():
    # Автопарки
    parks = [
        CarPark(1, 'Люблинский'),
        CarPark(2, 'Дмитровкий'),
        CarPark(3, 'Марьинский'),
        CarPark(11, 'Чертановский'),
        CarPark(22, 'Нахабинский'),
        CarPark(33, 'Лобнинский'),
    ]

    # Водители
    drivers = [
        Driver(1, 'Артамонов', 35000, 1),
        Driver(2, 'Петров', 40000, 2),
        Driver(3, 'Иваненко', 37500, 3),
        Driver(4, 'Иванов', 30000, 3),
        Driver(5, 'Иванин', 40000, 3),
    ]

    drivers_parks = [
        DriverPark(1, 1),
        DriverPark(2, 2),
        DriverPark(3, 3),
        DriverPark(3, 4),
        DriverPark(3, 5),
        DriverPark(11, 1),
        DriverPark(22, 2),
        DriverPark(33, 4),
        DriverPark(33, 5),
        DriverPark(33, 3),
    ]
    res1 = sorted([(d.fio, p.name) for d in drivers for p in parks if d.park_id == p.id], key=lambda x: x[0])
    print(res1)
    res2 = sorted({p.name: len(list(filter(lambda x: x.park_id == p.id, drivers))) for p in parks}.items(), key=lambda x: x[1], reverse=True)
    print(res2)
    res3 = {d.fio: [p.name for p in parks if p.id in [drp.park_id for drp in drivers_parks if drp.driver_id == d.id]] for d in drivers if str(d.fio).endswith('ов')}
    print(res3)


if __name__ == "__main__":
    main()