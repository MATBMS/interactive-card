// Validation Rules
export const VALIDATION = {
  CARD_NUMBER_LENGTH: 16,
  CARD_NUMBER_MIN_DISPLAY_LENGTH: 4,
  CVC_LENGTH: 3,
  EXP_MONTH_MIN: 1,
  EXP_MONTH_MAX: 12,
  EXP_YEAR_MIN: 1,
  EXP_YEAR_MAX: 99,
  NAME_MIN_LENGTH: 2,
  NAME_MAX_LENGTH: 50,
};

// Error Messages
export const ERROR_MESSAGES = {
  REQUIRED: `Can't be blank`,
  WRONG_FORMAT: 'Wrong format',
  NUMBERS_ONLY: 'Wrong format, numbers only',
  CARD_NUMBER_LENGTH: `Must be exactly ${VALIDATION.CARD_NUMBER_LENGTH} digits`,
  MONTH_RANGE: `Month must be between ${VALIDATION.EXP_MONTH_MIN} and ${VALIDATION.EXP_MONTH_MAX}`,
  YEAR_RANGE: `Year must be between ${VALIDATION.EXP_YEAR_MIN} and ${VALIDATION.EXP_YEAR_MAX}`,
  CVC_FORMAT: `Must be exactly ${VALIDATION.CVC_LENGTH} digits`,
};

// Regex Patterns
export const PATTERNS = {
  NAME: /^[a-zA-Z\s'-]{2,50}$/,
  CARD_NUMBER: /^\d{16}$/,
  MONTH: /^\d{1,2}$/,
  YEAR: /^\d{2}$/,
  CVC: /^\d{3}$/,
};

// Default Values
export const DEFAULTS = {
  CARD_NAME: 'Jane Appleseed',
  CARD_NUMBER: '0000000000000000',
  EXP_MONTH: '00',
  EXP_YEAR: '00',
  CVC: '000',
};
