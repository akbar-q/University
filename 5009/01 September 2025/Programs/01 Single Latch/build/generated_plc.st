PROGRAM program0
  VAR
    Button : BOOL;
    Output : BOOL;
  END_VAR

  Output := Button OR Button AND NOT(Output);
END_PROGRAM


CONFIGURATION Config0

  RESOURCE Res0 ON PLC
    TASK task0(INTERVAL := T#20ms,PRIORITY := 0);
    PROGRAM instance0 WITH task0 : program0;
  END_RESOURCE
END_CONFIGURATION
