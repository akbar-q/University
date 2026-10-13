TYPE
  LOGLEVEL : (CRITICAL, WARNING, INFO, DEBUG) := INFO;
END_TYPE

FUNCTION_BLOCK LOGGER
  VAR_INPUT
    TRIG : BOOL;
    MSG : STRING;
    LEVEL : LOGLEVEL := INFO;
  END_VAR
  VAR
    TRIG0 : BOOL;
  END_VAR

  IF TRIG AND NOT TRIG0 THEN
  {{
   LogMessage(GetFbVar(LEVEL),(char*)GetFbVar(MSG, .body),GetFbVar(MSG, .len));
  }}
  END_IF;
  TRIG0:=TRIG;
END_FUNCTION_BLOCK


PROGRAM program0
  VAR
    Inlet : BOOL;
    WaterOutlet : BOOL;
    OilOutlet : BOOL;
    tempSensor : INT;
    levelSensor : INT := 20;
    TempReading : INT;
    LevelReading : INT;
    _TMP_MUL13_OUT : INT;
    _TMP_DIV15_OUT : INT;
    _TMP_MUL19_OUT : INT;
    _TMP_DIV20_OUT : INT;
    _TMP_EQ9_OUT : BOOL;
    _TMP_LE5_OUT : BOOL;
    _TMP_LE1_OUT : BOOL;
  END_VAR

  _TMP_MUL13_OUT := MUL(tempSensor, 50);
  _TMP_DIV15_OUT := DIV(_TMP_MUL13_OUT, 1023);
  TempReading := _TMP_DIV15_OUT;
  _TMP_MUL19_OUT := MUL(levelSensor, 200);
  _TMP_DIV20_OUT := DIV(_TMP_MUL19_OUT, 1023);
  LevelReading := _TMP_DIV20_OUT;
  _TMP_EQ9_OUT := EQ(levelSensor, 0);
  Inlet := NOT(OilOutlet) AND NOT(WaterOutlet) AND _TMP_EQ9_OUT;
  _TMP_LE5_OUT := LE(levelSensor, 20);
  OilOutlet := NOT(WaterOutlet) AND _TMP_LE5_OUT;
  _TMP_LE1_OUT := LE(levelSensor, 200);
  WaterOutlet := NOT(Inlet) AND NOT(OilOutlet) AND _TMP_LE1_OUT;
END_PROGRAM


CONFIGURATION Config0

  RESOURCE Res0 ON PLC
    TASK task0(INTERVAL := T#20ms,PRIORITY := 0);
    PROGRAM instance0 WITH task0 : program0;
  END_RESOURCE
END_CONFIGURATION
