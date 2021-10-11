import time
from contextlib import contextmanager


class cm_timer_1:
    def __enter__(self):
        self.start_time = time.time()
        return 1

    def __exit__(self, exp_type, exp_value, traceback):
        print('Execution time: {} s'.format(time.time() - self.start_time))


@contextmanager
def cm_timer_2():
    start_time = time.time()
    yield 1
    print('Execution time: {} s'.format(time.time() - start_time))


if __name__ == '__main__':
    with cm_timer_1():
        time.sleep(2)

    with cm_timer_2():
        time.sleep(2)
