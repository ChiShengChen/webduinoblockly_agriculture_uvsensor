Blockly.JavaScript['uv_setup'] = function(block) {
  var variable_uv = Blockly.JavaScript.variableDB_.getName(block.getFieldValue('uv'), Blockly.Variables.NAME_TYPE);
  var value_name = Blockly.JavaScript.valueToCode(block, 'NAME', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code = '...;\n';
  return code;
};

Blockly.JavaScript['uv_pin'] = function(block) {
  var dropdown_uno_apin1 = block.getFieldValue('uno_Apin1');
  // TODO: Assemble JavaScript into code variable.
  var code = '...';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript['uv_sencing'] = function(block) {
  var variable_uv = Blockly.JavaScript.variableDB_.getName(block.getFieldValue('uv'), Blockly.Variables.NAME_TYPE);
  var statements_name = Blockly.JavaScript.statementToCode(block, 'NAME');
  // TODO: Assemble JavaScript into code variable.
  var code = '...;\n';
  return code;
};

Blockly.JavaScript['uv_display'] = function(block) {
  var variable_uv = Blockly.JavaScript.variableDB_.getName(block.getFieldValue('uv'), Blockly.Variables.NAME_TYPE);
  // TODO: Assemble JavaScript into code variable.
  var code = '...';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_NONE];
};