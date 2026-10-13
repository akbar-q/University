PROGRAM program0
  VAR
    LED AT %QX0.6 : BOOL;
    Start AT %IX0.2 : BOOL;
    Stop AT %IX0.3 : BOOL;
    Run AT %QX0.5 : BOOL := 1;
  END_VAR
  VAR
    Trigger : BOOL;
    TOF0 : TOF;
    TON0 : TON;
    SR0 : SR;
  END_VAR

  TOF0(IN := NOT(LED), PT := t#2500ms);
  TON0(IN := TOF0.Q, PT := t#2500ms);
  LED := TON0.Q;
  SR0(S1 := Start, R := Stop);
  Run := SR0.Q1;
END_PROGRAM


CONFIGURATION Config0

  RESOURCE Res0 ON PLC
    TASK task0(INTERVAL := T#20ms,PRIORITY := 0);
    PROGRAM instance0 WITH task0 : program0;
  END_RESOURCE
END_CONFIGURATION
