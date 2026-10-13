PROGRAM program0
  VAR
    Sensor : BOOL;
    Flag : BOOL;
    Count : INT := 1;
    One : INT := 1;
    Two : INT := 2;
    TON0 : TON;
    _TMP_GE6_OUT : BOOL;
    _TMP_BOOL_TO_INT9_OUT : INT;
    _TMP_ADD4_OUT : INT;
  END_VAR

  _TMP_GE6_OUT := GE(Sensor, 1);
  _TMP_BOOL_TO_INT9_OUT := BOOL_TO_INT(NOT(Flag) AND _TMP_GE6_OUT);
  _TMP_ADD4_OUT := ADD(_TMP_BOOL_TO_INT9_OUT, Count);
  Count := _TMP_ADD4_OUT;
  TON0(IN := _TMP_GE6_OUT, PT := t#1ms);
  Flag := TON0.Q;
END_PROGRAM


CONFIGURATION Config0

  RESOURCE Res0 ON PLC
    TASK task0(INTERVAL := T#20ms,PRIORITY := 0);
    PROGRAM instance0 WITH task0 : program0;
  END_RESOURCE
END_CONFIGURATION
