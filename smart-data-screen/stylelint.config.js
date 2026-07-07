export default {
  extends: ['stylelint-config-standard', 'stylelint-config-standard-vue'],
  ignoreFiles: ['dist/**', 'coverage/**'],
  rules: {
    'selector-class-pattern': null,
    'custom-property-pattern': null,
  },
}
