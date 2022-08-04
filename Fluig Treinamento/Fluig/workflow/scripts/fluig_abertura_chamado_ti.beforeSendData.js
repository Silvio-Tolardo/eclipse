function beforeSendData(customField, customFact) {

    customField[0] = hAPI.getCardValue("combo_abertura");

    var field0 = hAPI.getCardValue('avalia_atend');
    field0 = +field0;
    if (!isNaN(field0)) {
        customFact[0] = field0;
    }
}
