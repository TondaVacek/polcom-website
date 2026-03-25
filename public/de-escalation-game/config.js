/**
 * config.js - Enhanced Configuration with Review System
 * Police De-escalation Training System
 */

const CONFIG = {
    BASE_URL: (function(){ try{ const u=new URL(window.location.href); const b=u.searchParams.get('base'); if(b){ return b.endsWith('/')?b:b+'/'; } var path=u.pathname.replace(/\/[^/]*$/, '/'); return u.origin + path; }catch(e){} return ''; })(),
    SUPPORTED_LANGUAGES: ['en', 'cs', 'lt', 'ro'],
    DEFAULT_LANGUAGE: 'en',
    FILE_PATHS: {
        translations: {
            en: 'translations/ui-en.json',
            cs: 'translations/ui-cs.json',
            lt: 'translations/ui-lt.json',
            ro: 'translations/ui-ro.json'
        },
        scenariosIndex: {
            en: 'scenarios/index-en.json',
            cs: 'scenarios/index-cs.json',
            lt: 'scenarios/index-lt.json',
            ro: 'scenarios/index-ro.json'
        },
        scenarios: {
            en: {
                1: 'scenarios/en/scenario-1-en.json',
                2: 'scenarios/en/scenario-2-en.json',
                3: 'scenarios/en/scenario-3-en.json',
                4: 'scenarios/en/scenario-4-en.json',
                5: 'scenarios/en/scenario-5-en.json',
                6: 'scenarios/en/scenario-6-en.json',
                7: 'scenarios/en/scenario-7-en.json',
                'domestic-crisis': 'scenarios/en/scenario-domestic-crisis-en.json',
                'custody-exchange': 'scenarios/en/scenario-custody-exchange-en.json',
                'hospital-disturbance': 'scenarios/en/scenario-hospital-disturbance-en.json',
                'road-rage': 'scenarios/en/scenario-road-rage-en.json',
                'street-vendor': 'scenarios/en/scenario-street-vendor-en.json',
                'traffic-stop': 'scenarios/en/scenario-traffic-stop-en.json',
                'youth-park': 'scenarios/en/scenario-youth-park-en.json'
            },
            cs: {
                1: 'scenarios/cs/scenario-1-cs.json',
                2: 'scenarios/cs/scenario-2-cs.json',
                3: 'scenarios/cs/scenario-3-cs.json',
                4: 'scenarios/cs/scenario-4-cs.json',
                5: 'scenarios/cs/scenario-5-cs.json',
                6: 'scenarios/cs/scenario-6-cs.json',
                7: 'scenarios/cs/scenario-7-cs.json',
                'domestic-crisis': 'scenarios/cs/scenario-domestic-crisis-cs.json',
                'custody-exchange': 'scenarios/cs/scenario-custody-exchange-cs.json',
                'hospital-disturbance': 'scenarios/cs/scenario-hospital-disturbance-cs.json',
                'road-rage': 'scenarios/cs/scenario-road-rage-cs.json',
                'street-vendor': 'scenarios/cs/scenario-street-vendor-cs.json',
                'traffic-stop': 'scenarios/cs/scenario-traffic-stop-cs.json',
                'youth-park': 'scenarios/cs/scenario-youth-park-cs.json'
            },
            lt: {
                1: 'scenarios/lt/scenario-1-lt.json',
                2: 'scenarios/lt/scenario-2-lt.json',
                3: 'scenarios/lt/scenario-3-lt.json',
                4: 'scenarios/lt/scenario-4-lt.json',
                5: 'scenarios/lt/scenario-5-lt.json',
                6: 'scenarios/lt/scenario-6-lt.json',
                7: 'scenarios/lt/scenario-7-lt.json',
                'domestic-crisis': 'scenarios/lt/scenario-domestic-crisis-lt.json',
                'custody-exchange': 'scenarios/lt/scenario-custody-exchange-lt.json',
                'hospital-disturbance': 'scenarios/lt/scenario-hospital-disturbance-lt.json',
                'road-rage': 'scenarios/lt/scenario-road-rage-lt.json',
                'street-vendor': 'scenarios/lt/scenario-street-vendor-lt.json',
                'traffic-stop': 'scenarios/lt/scenario-traffic-stop-lt.json',
                'youth-park': 'scenarios/lt/scenario-youth-park-lt.json'
            },
            ro: {
                1: 'scenarios/ro/scenario-1-ro.json',
                2: 'scenarios/ro/scenario-2-ro.json',
                3: 'scenarios/ro/scenario-3-ro.json',
                4: 'scenarios/ro/scenario-4-ro.json',
                5: 'scenarios/ro/scenario-5-ro.json',
                6: 'scenarios/ro/scenario-6-ro.json',
                7: 'scenarios/ro/scenario-7-ro.json',
                'domestic-crisis': 'scenarios/ro/scenario-domestic-crisis-ro.json',
                'custody-exchange': 'scenarios/ro/scenario-custody-exchange-ro.json',
                'hospital-disturbance': 'scenarios/ro/scenario-hospital-disturbance-ro.json',
                'road-rage': 'scenarios/ro/scenario-road-rage-ro.json',
                'street-vendor': 'scenarios/ro/scenario-street-vendor-ro.json',
                'traffic-stop': 'scenarios/ro/scenario-traffic-stop-ro.json',
                'youth-park': 'scenarios/ro/scenario-youth-park-ro.json'
            }
        },
        // NEW: Review data files for comprehensive analysis
        reviews: {
            en: {
                1: 'scenarios/reviews/review-1-en.json',
                2: 'scenarios/reviews/review-2-en.json',
                3: 'scenarios/reviews/review-3-en.json',
                4: 'scenarios/reviews/review-4-en.json',
                5: 'scenarios/reviews/review-5-en.json',
                6: 'scenarios/reviews/review-6-en.json',
                7: 'scenarios/reviews/review-7-en.json',
                'domestic-crisis': 'scenarios/reviews/review-domestic-crisis-en.json',
                'custody-exchange': 'scenarios/reviews/review-custody-exchange-en.json',
                'hospital-disturbance': 'scenarios/reviews/review-hospital-disturbance-en.json',
                'road-rage': 'scenarios/reviews/review-road-rage-en.json',
                'street-vendor': 'scenarios/reviews/review-street-vendor-en.json',
                'traffic-stop': 'scenarios/reviews/review-traffic-stop-en.json',
                'youth-park': 'scenarios/reviews/review-youth-park-en.json'
            },
            cs: {
                1: 'scenarios/reviews/review-1-cs.json',
                2: 'scenarios/reviews/review-2-cs.json',
                3: 'scenarios/reviews/review-3-cs.json',
                4: 'scenarios/reviews/review-4-cs.json',
                5: 'scenarios/reviews/review-5-cs.json',
                6: 'scenarios/reviews/review-6-cs.json',
                7: 'scenarios/reviews/review-7-cs.json',
                'domestic-crisis': 'scenarios/reviews/review-domestic-crisis-cs.json',
                'custody-exchange': 'scenarios/reviews/review-custody-exchange-cs.json',
                'hospital-disturbance': 'scenarios/reviews/review-hospital-disturbance-cs.json',
                'road-rage': 'scenarios/reviews/review-road-rage-cs.json',
                'street-vendor': 'scenarios/reviews/review-street-vendor-cs.json',
                'traffic-stop': 'scenarios/reviews/review-traffic-stop-cs.json',
                'youth-park': 'scenarios/reviews/review-youth-park-cs.json'
            },
            lt: {
                1: 'scenarios/reviews/review-1-lt.json',
                2: 'scenarios/reviews/review-2-lt.json',
                3: 'scenarios/reviews/review-3-lt.json',
                4: 'scenarios/reviews/review-4-lt.json',
                5: 'scenarios/reviews/review-5-lt.json',
                6: 'scenarios/reviews/review-6-lt.json',
                7: 'scenarios/reviews/review-7-lt.json',
                'domestic-crisis': 'scenarios/reviews/review-domestic-crisis-lt.json',
                'custody-exchange': 'scenarios/reviews/review-custody-exchange-lt.json',
                'hospital-disturbance': 'scenarios/reviews/review-hospital-disturbance-lt.json',
                'road-rage': 'scenarios/reviews/review-road-rage-lt.json',
                'street-vendor': 'scenarios/reviews/review-street-vendor-lt.json',
                'traffic-stop': 'scenarios/reviews/review-traffic-stop-lt.json',
                'youth-park': 'scenarios/reviews/review-youth-park-lt.json'
            },
            ro: {
                1: 'scenarios/reviews/review-1-ro.json',
                2: 'scenarios/reviews/review-2-ro.json',
                3: 'scenarios/reviews/review-3-ro.json',
                4: 'scenarios/reviews/review-4-ro.json',
                5: 'scenarios/reviews/review-5-ro.json',
                6: 'scenarios/reviews/review-6-ro.json',
                7: 'scenarios/reviews/review-7-ro.json',
                'domestic-crisis': 'scenarios/reviews/review-domestic-crisis-ro.json',
                'custody-exchange': 'scenarios/reviews/review-custody-exchange-ro.json',
                'hospital-disturbance': 'scenarios/reviews/review-hospital-disturbance-ro.json',
                'road-rage': 'scenarios/reviews/review-road-rage-ro.json',
                'street-vendor': 'scenarios/reviews/review-street-vendor-ro.json',
                'traffic-stop': 'scenarios/reviews/review-traffic-stop-ro.json',
                'youth-park': 'scenarios/reviews/review-youth-park-ro.json'
            }
        }
    },
    TIMERS: {
        TYPING_DELAY: 800,
        MESSAGE_DELAY: 1500,
        CHOICE_TIMEOUT: 30000,
        FEEDBACK_DELAY: 2000
    },
    ANIMATIONS: {
        FADE_DURATION: 300,
        SLIDE_DURATION: 500
    },
    STORAGE_KEYS: {
        BADGES: 'deescalation-badges',
        PROGRESS: 'deescalation-progress',
        SETTINGS: 'deescalation-settings',
        LANGUAGE: 'deescalation-language',
        SOUND_ENABLED: 'deescalation-sound-enabled',
        SESSION_HISTORY: 'deescalation-sessions' // NEW: Store session performance data
    },
    // NEW: Review system configuration
    REVIEW: {
        CRITICAL_STAGES: {
            'domestic-crisis': [3, 4, 5], // Child interaction and mental health stages
            'default': [] // Default for scenarios without defined critical stages
        },
        PERFORMANCE_THRESHOLDS: {
            perfect: 100,
            good: 80,
            average: 50,
            poor: 0
        },
        PATTERN_KEYWORDS: {
            empathy: ['understand', 'sorry', 'help', 'listen', 'concern', 'support', 'feeling'],
            escalation: ['force', 'demand', 'threaten', 'yell', 'aggressive', 'confront'],
            deescalation: ['calm', 'peaceful', 'help', 'understand', 'talk', 'discuss'],
            missed_cues: ['dismiss', 'ignore', 'overlook', 'fail', 'miss']
        },
        METRICS_WEIGHTS: {
            communication: 0.3,
            empathy: 0.25,
            procedure: 0.2,
            safety: 0.15,
            decision_speed: 0.1
        },
        MIN_STAGES_FOR_PATTERN: 3, // Minimum stages to identify a pattern
        EXPORT_FORMAT: 'json', // Format for exporting session data
        ENABLE_ANALYTICS: true, // Enable detailed analytics tracking
        SAVE_SESSION_HISTORY: true // Save all session data for later analysis
    },
    // NEW: Scoring configuration
    SCORING: {
        CONFIDENCE_MULTIPLIER: true, // Whether to apply confidence multiplier to scores
        RETRY_PENALTY: 0.8, // Score multiplier for retry attempts
        TIME_BONUS: {
            enabled: true,
            fast: 10, // Under 10 seconds
            medium: 5, // 10-20 seconds
            slow: 0 // Over 20 seconds
        },
        PERFECT_RUN_BONUS: 50, // Bonus points for perfect run
        NO_RETRY_BONUS: 20, // Bonus for completing without retries
        EMPATHY_BONUS: 10, // Bonus per empathetic response
        CRITICAL_SUCCESS_BONUS: 25 // Bonus for handling critical moments well
    },
    // NEW: UI Configuration
    UI: {
        SHOW_TIMER: true,
        SHOW_CONFIDENCE: false,
        SHOW_SCORE: true,
        SHOW_STAGE_PROGRESS: true,
        ENABLE_KEYBOARD_SHORTCUTS: true,
        AUTO_SCROLL_DIALOGUE: true,
        SHOW_TYPING_INDICATOR: true,
        ENABLE_SOUND_EFFECTS: true,
        REVIEW_CHART_COLORS: {
            positive: '#10b981',
            neutral: '#f59e0b',
            negative: '#ef4444',
            empathy: '#667eea',
            escalation: '#dc2626'
        }
    },
    // NEW: Debug settings
    DEBUG: {
        ENABLED: false,
        LOG_CHOICES: false,
        LOG_SCORES: false,
        LOG_PATTERNS: false,
        SKIP_ANIMATIONS: false,
        SHOW_ALL_STAGES: false,
        UNLIMITED_TIME: false
    }
};