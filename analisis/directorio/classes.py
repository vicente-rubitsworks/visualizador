class Label:
    def __init__(self, label):
        self.label = label

class Comment:
    def __init__(self, label, content):
        self.label = label
        self.content = content

class Total:
    def __init__(self, total):
        self.total = total

class Dependencia:
    def __init__(self, cod, total):
        self.total = total
        self.cod=cod