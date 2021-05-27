const actions = {
  pushTranslation: ({ translations }, id, text) => ({
    translations: translations.concat([{ id, text }]),
  }),
};

export default actions;
