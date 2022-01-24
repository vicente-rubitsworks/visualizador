import pandas as pd
data=pd.read_csv('./analisis/data/coquimbo_2020.csv')

def directorio_por_comuna():
    agrupado_por_comuna=data.groupby('NOM_COM_RBD')['RBD'].count()
    return agrupado_por_comuna.to_dict()

def total_establecimientos():
    return data.shape[0]

def dependencias():
    agrupado_por_depe2=data.groupby('COD_DEPE2')['RBD'].count()
    return agrupado_por_depe2.to_dict()