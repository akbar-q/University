PROGRAM program0
  VAR
    Trigger : BOOL;
    Lamp : BOOL;
    TON0 : TON;
    TOF0 : TOF;
  END_VAR

  TON0(IN := NOT(Lamp), PT := t#1s);
  TOF0(IN := TON0.Q, PT := t#1s);
  Lamp := TOF0.Q;
END_PROGRAM


CONFIGURATION Config0

  RESOURCE Res0 ON PLC
    TASK task0(INTERVAL := T#20ms,PRIORITY := 0);
    PROGRAM instance0 WITH task0 : program0;
  END_RESOURCE
END_CONFIGURATION
