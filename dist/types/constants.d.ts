declare const _exports: Readonly<{
    CONFIGS: {
        PROFILE_VERIFICATION: string;
    };
    LOCALHOST: "http://localhost:89";
    COOKIES: {
        xPfm: string;
        token: string;
    };
    BONUS_OPERATION: {
        increase: string;
        decrease: string;
    };
    EMAIL_MESSAGE_TYPE: {
        change: string;
        confirm: string;
    };
    DEFAULT_APM: {
        active: boolean;
        serviceName: string;
        serviceVersion: string;
        serverUrl: string;
        serverUrlPrefix: string;
        environment: string;
        transactionSampleRate: number;
    };
    DELIVERY_TYPE: {
        courier: {
            id: number;
            name: string;
        };
        pickup: {
            id: number;
            name: string;
        };
        shop: {
            id: number;
            name: string;
        };
        fixprice: {
            id: number;
            name: string;
        };
    };
    REGISTRATION_TYPE: {
        physCardOldFullReg: number;
        physCardCallReg: number;
        physCardSimpReg: number;
        virtCardFullReg: number;
        virtCardSimpReg: number;
        quickPurchase: number;
        employee: number;
        vipEmployee: number;
    };
    ERROR: {
        code: {
            tooMuchRequests: number;
            pageNotFound: number;
            validation: number;
            notActual: number;
            invalidXKey: number;
            invalidConfirmationCode: number;
            timeout: number;
            tooMany: number;
            notAllowed: number;
            closedStore: number;
            userAlreadyAuthed: number;
            pickupPointIsClosed: number;
            unknownError: number;
            techBonuses: number;
            exceedingMaxBonuses: number;
            exceededLimit: number;
            addressAlreadyExist: number;
            adultOnlyOfflineStore: number;
            promocodeHasBeenApplied: number;
            promocodeWrongValue: number;
            promocodeHasExpired: number;
            promocodeNotFound: number;
            promocodeAccessDenied: number;
            confirmPhoneBeforeApplyingPromocode: number;
            promocodeAuthDataVerificationError: number;
            promocodeAuthFormatError: number;
            promocodeMissed: number;
            promocodeApplyAttemptsExceeded: number;
            limitedUsePromocode: number;
            outStock: number;
            needCaptcha: number;
            unavailableExpress: number;
            addressDeliveryUnavailable: number;
            orderIdChanged: number;
        };
        status: {
            badRequest: number;
            forbidden: number;
            notFound: number;
            internalServer: number;
            notImplemented: number;
            serviceUnavailable: number;
            gatewayTimeout: number;
            frontendCommonError: number;
            ok: number;
        };
        name: {
            AbortError: string;
            DOMException: string;
        };
    };
    SCHEMA: {
        image: string;
        offer: string;
        product: string;
        availability: {
            outOfStock: string;
            inStock: string;
        };
    };
    MAP_DEFAULT_RUSSIA: number[];
    DELIVERY_OPTIONS: ({
        id: number;
        name: string;
        text: string;
        startedPrice: number;
        fileName: string;
    } | {
        id: number;
        name: string;
        text: string;
        startedPrice: null;
        fileName: string;
    })[];
    MOSCOW_PFM: "C001";
    BONUS_DECLINATION: "bonusPlural";
    ACTIVE_DECLINATION: "activePlural";
    INACTIVE_DECLINATION: "inactivePlural";
    FULFILLED_REQUEST: "fulfilled";
    REJECTED_REQUEST: "rejected";
    FAKE_VARIANT: "fake";
    PHONE_VALIDATE: {
        ae: {
            mask: string;
            rule: RegExp;
            formatDisplay: (phone: any) => string;
        };
        ru: {
            mask: string;
            rule: RegExp;
            formatDisplay: (phone: any) => string;
        };
        kz: {
            mask: string;
            rule: RegExp;
            formatDisplay: (phone: any) => string;
        };
        lv: {
            mask: string;
            rule: RegExp;
            formatDisplay: (phone: any) => string;
        };
        by: {
            mask: string;
            rule: RegExp;
            formatDisplay: (phone: any) => string;
        };
        en: {
            mask: string;
            rule: RegExp;
            formatDisplay: () => "";
        };
    };
    /**
     * Заголовки api
     */
    HEADERS: {
        language: string;
        xDeliveryType: string;
        xCity: string;
        xPfm: string;
        xMark: string;
        xKey: string;
        xCountry: string;
        xWebApplicationType: string;
        isLogged: string;
        xOpenID: string;
        contentType: string;
    };
    /**
     * Типы полов
     */
    GENDER: {
        male: string;
        female: string;
    };
    /**
     * Типы недвижимости для заявок по вакансиям
     */
    VACANCY_REALTY_TYPES: {
        store: string;
        warehouse: string;
        office: string;
    };
    /**
     * Адреса ссылок "Работа у нас"
     */
    WORK_LINKS: {
        base: string;
        store: string;
        warehouse: string;
        office: string;
        it: string;
        probation: string;
        contacts: string;
    };
    PARTNERS_LINKS: {
        partners: string;
        serviceProviders: string;
        purchases: string;
        landlords: string;
        franchising: string;
        other: string;
        EDI: string;
    };
    /**
     * Адреса ссылок "О компании"
     */
    ABOUT_LINKS: {
        about: string;
        business: string;
        help: string;
        contacts: string;
        press: string;
        qualityControl: string;
    };
    /**
     * @param {Object} app
     * @returns {Array<Object>}
     */
    PARTNERS_PAGES(app: Object): Array<Object>;
    /**
     * @typedef {{
     * title: string,
     * link: string,
     * exact: boolean,
     * external?: boolean,
     * }} NavigationLink
     */
    /**
     * @param {Object} app
     * @returns {Array<NavigationLink>}
     */
    WORK_PAGES(app: Object): Array<{
        title: string;
        link: string;
        exact: boolean;
        external?: boolean;
    }>;
    /**
     * @param {Object} app
     * @returns {Array<Object>}
     */
    ABOUT_PAGES(app: Object): Array<Object>;
    ORDER: {
        status: {
            noPayed: number;
            payed: number;
            cancelled: number;
            issued: number;
            queue: number;
        };
        payType: {
            payOnline: number;
            payReceiving: number;
            payReceivingCart: number;
            payReceivingFiat: number;
        };
        payMethod: {
            online: string;
            inPlace: string;
            cartInPlace: string;
            fiatInPlace: string;
        };
    };
    APPLICATION_LINKS: {
        ru: {
            googlePlay: string;
            appleStore: string;
            appGallery: string;
            ruStore: string;
        };
        by: {
            googlePlay: string;
            appleStore: string;
        };
        kz: {
            googlePlay: string;
            appleStore: string;
        };
    };
    APPLICATION_IMAGES: {
        ru: {
            googlePlay: string;
            appleStore: string;
            appGallery: string;
            ruStore: string;
        };
        kk: {
            googlePlay: string;
            appleStore: string;
        };
    };
    APPLICATION_YM_PARAMS: {
        ruStore: string;
        googlePlay: string;
        appStore: string;
        appGallery: string;
    };
    OBTAIN_METHOD: {
        courier: {
            id: number;
            name: string;
        };
        courierExpress: {
            id: number;
            name: string;
        };
        store: {
            id: number;
            name: string;
        };
        pickup: {
            id: number;
            name: string;
        };
    };
    MAX_FAVORITE_ADDRESSES: 10;
    COURIER_SERVICE: {
        cdek: number;
        boxberry: number;
        russianPost: number;
        yandexDelivery: number;
    };
    SERVICES_NAME: {
        cdek: string;
        boxberry: string;
        russianPost: string;
        yandexDelivery: string;
    };
    DELIVERY_SERVICE: {
        russianPost: number;
    };
    DELIVERY_SERVICES: {
        BoxberryCourier: {
            id: number;
            type: number;
            name: string;
        };
        BoxberryPickup: {
            id: number;
            type: number;
            name: string;
        };
        CDEKCourier: {
            id: number;
            type: number;
            name: string;
        };
        CDEKPickup: {
            id: number;
            type: number;
            name: string;
        };
        RussianPostCourier: {
            id: number;
            type: number;
            name: string;
        };
        RussianPostPickup: {
            id: number;
            type: number;
            name: string;
        };
    };
    FEEDBACK_THEME_ALIASES: {
        other: string;
        bonus: string;
        complaint: string;
        errorAuth: string;
        errorWeb: string;
        errorMp: string;
        order: string;
        vaccination: string;
        pr: string;
        sublease: string;
        resume: string;
        deliveryGoods: string;
    };
    DELIVERY_NAMES: {
        store: string;
        courier: string;
        express: string;
    };
    PAYMENT_TYPE: {
        inStore: number;
        online: number;
        uponReceipt: number;
    };
    PAYMENT_TYPES_YM: {
        paymentUponReceipt: string;
        online: string;
    };
    REQUEST_HEADERS: {
        mark: string;
        xClientRoute: string;
    };
    DISCOUNT_TYPE: {
        specialPrice: number;
        loyaltyPoints: number;
        promocode: number;
    };
    POINTS_UNAVAILABILITY_REASONS: {
        pickup: {
            inactive: string;
            update: string;
        };
        store: {
            inactive: boolean;
        };
    };
    LOYALTY_PROGRAM: "loyaltyProgram";
    PROMOCODE_PROGRAM: "promocode";
    FIRST_IMPRESSION_CONVERSION: "firstImpressionConversion";
    ORDERS_TYPES: {
        online: string;
        store: string;
    };
    CONTENT_TYPES: {
        link: string;
        text: string;
    };
    ORDER_STATUS: {
        fail: number;
        success: number;
        sms: number;
    };
    EDGE_CASE_REASON: {
        error: string;
        empty: string;
    };
    SIZES: {
        xs: string;
        sm: string;
        md: string;
        lg: string;
        xl: string;
    };
    MENU_ALIASES: {
        notifications: string;
    };
    STORY: {
        slidesAutoplay: number;
        speed: number;
    };
    ERROR_INFORMER_BLACK: "black";
    DELIVERY_FLAT_MAX_LENGTH: 6;
    NOTIFICATION_PERSMISSIONS: {
        default: string;
        granted: string;
        denied: string;
    };
    APP_HOST_TYPES: {
        TWA: string;
    };
    YANDEX_COUNTERS: {
        ru: string;
        kz: string;
        by: string;
        ae: string;
    };
    MY_TRACKER_COUNTERS: {
        ru: number;
        by: number;
        kz: number;
    };
    VISIBLE_STATE: {
        visible: string;
        hidden: string;
    };
    METRIC_LOCATIONS: {
        cart: string;
        favorites: string;
        search: string;
        catalog: string;
        productCard: string;
    };
    CURRENCIES: {
        ru: string;
        kz: string;
    };
    GRID: {
        guter: number; /** px */
    };
    REM_BASE: 10;
    FIRST_PAGE: 1;
    ONE_HUNDRED_PERCENT: 100;
    AB_FLAGS: {
        enabled: string;
        firstElementIndex: number;
    };
    BUTTON_VARIANTS: {
        secondary: string;
        primaryLight: string;
        secondaryDark: string;
    };
    BUTTON_TYPES: {
        filter: string;
    };
    BUTTON_SIZES: {
        small: string;
        normal: string;
        large: string;
    };
    POLYGON: {
        first: {
            tl: number;
            br: number;
        };
        second: {
            tl: number;
            br: number;
        };
        third: {
            tl: number;
            br: number;
        };
        fourth: {
            tl: number;
            br: number;
        };
        fifth: {
            tl: number;
            br: number;
        };
        sixth: {
            tl: number;
            br: number;
        };
        seventh: {
            tl: number;
            br: number;
        };
        eighth: {
            tl: number;
            br: number;
        };
    };
    KEY_CODES: {
        escape: number;
    };
    VIDEO_TYPE: {
        YOUTUBE: string;
        RUTUBE: string;
    };
    ICONS_SRC: {
        OUTLINE: {
            INFO: string;
            CROSS: string;
            EDIT: string;
            SPINNER: string;
            CHECK: string;
            ARROW: string;
            CHEVRON: string;
            PERCENT: string;
            CLOCK: string;
            MAP_PIN: string;
            NAVIGATION: string;
            PAYMENT: string;
            TRUCK: string;
            COPY: string;
            SEARCH: string;
            arrowRight: string;
            chevronLeft: string;
            plus: string;
            minus: string;
            navigation: string;
            trash: string;
            filter: string;
        };
        FILLED: {
            PIN: string;
        };
    };
    VIDEO_DOMAIN: {
        RUTUBE: string;
        YOUTUBE: string;
    };
    X_OPEN_ID: {
        vk: number;
        mts: number;
    };
    CARD_TYPES: {
        blue: number;
        black: number;
    };
    METRIC_SHIPPING_TYPES: {
        deliveryPoint: string;
        courier: string;
        pickup: string;
    };
    PRODUCTS_PER_PAGE: 24;
    NOTIFICATION_TYPES: {
        promo: string;
    };
    TRANSACTION: {
        paymentIncrease: number;
        paymentDecrease: number;
        refund: number;
        settingPoints: number;
        charityPointsDebiting: number;
    };
    ASSISTANT: {
        dataTypes: {
            control: string;
            chunk: string;
            response: string;
            error: string;
        };
        contentTypes: {
            start: string;
            loader: string;
            end: string;
        };
    };
}>;
export = _exports;
