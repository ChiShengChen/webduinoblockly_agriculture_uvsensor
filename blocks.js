Blockly.Blocks['uv_setup'] = {
  init: function() {
    this.appendValueInput("NAME")
        .setCheck(null)
        .appendField("設定")
        .appendField(new Blockly.FieldVariable("uv"), "uv")
        .appendField("腳位為");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(330);
 this.setTooltip("");
 this.setHelpUrl("");
  }

Blockly.Blocks['uv_pin'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("紫外線，")
        .appendField("uv pin")
        .appendField(new Blockly.FieldDropdown([["A0","A0"], ["A1","A1"], ["A2","A2"], ["A3","A3"], ["A4","A4"], ["A5","A5"]]), "uno_Apin1");
    this.setOutput(true, null);
    this.setColour(230);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['uv_sencing'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(new Blockly.FieldVariable("uv"), "uv")
        .appendField("開始偵測");
    this.appendStatementInput("NAME")
        .setCheck(null)
        .appendField("執行");
    this.setColour(65);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['uv_display'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(new Blockly.FieldVariable("uv"), "uv")
        .appendField("所測得目前的")
        .appendField("紫外線比較強度");
    this.setOutput(true, null);
    this.setColour(20);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

