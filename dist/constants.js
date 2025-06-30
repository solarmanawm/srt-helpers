var s = (e, t) => () => (t || e((t = { exports: {} }).exports, t), t.exports);
var a = s((l, i) => {
  const r = i.exports = Object.freeze({
    CONFIGS: {
      PROFILE_VERIFICATION: "ecom.additional.profile.verify"
    },
    LOCALHOST: "http://localhost:89",
    COOKIES: {
      xPfm: "x-pfm",
      token: "token"
    },
    BONUS_OPERATION: {
      increase: "increase",
      decrease: "decrease"
    },
    EMAIL_MESSAGE_TYPE: {
      change: "emailChange",
      confirm: "emailConfirm"
    },
    DEFAULT_APM: {
      active: !0,
      serviceName: "buyer-front",
      serviceVersion: "1.0",
      serverUrl: "https://apm.fix-price.ru",
      serverUrlPrefix: "",
      environment: "test",
      transactionSampleRate: 0.3
    },
    DELIVERY_TYPE: {
      courier: {
        id: 0,
        name: "courier"
      },
      pickup: {
        id: 1,
        name: "pickup"
      },
      shop: {
        id: 2,
        name: "shop"
      },
      fixprice: {
        id: 5,
        name: "FixPrice"
      }
    },
    REGISTRATION_TYPE: {
      physCardOldFullReg: 100,
      physCardCallReg: 130,
      physCardSimpReg: 150,
      virtCardFullReg: 180,
      virtCardSimpReg: 200,
      quickPurchase: 300,
      employee: 400,
      vipEmployee: 500
    },
    ERROR: {
      code: {
        tooMuchRequests: 3,
        pageNotFound: 25,
        validation: 5,
        notActual: 104,
        invalidXKey: 60,
        invalidConfirmationCode: 105,
        timeout: 106,
        tooMany: 107,
        notAllowed: 121,
        closedStore: 33,
        userAlreadyAuthed: 34,
        pickupPointIsClosed: 44,
        unknownError: 999,
        techBonuses: 1013,
        exceedingMaxBonuses: 1010,
        exceededLimit: 1015,
        addressAlreadyExist: 1016,
        adultOnlyOfflineStore: 509001,
        promocodeHasBeenApplied: 3001,
        promocodeWrongValue: 0,
        promocodeHasExpired: 3008,
        promocodeNotFound: 3009,
        promocodeAccessDenied: 504032,
        confirmPhoneBeforeApplyingPromocode: 504028,
        promocodeAuthDataVerificationError: 504029,
        promocodeAuthFormatError: 504030,
        promocodeMissed: 504031,
        promocodeApplyAttemptsExceeded: 504023,
        limitedUsePromocode: 600032,
        outStock: 1002,
        needCaptcha: 600002,
        unavailableExpress: 503009,
        addressDeliveryUnavailable: 503002,
        orderIdChanged: 600012
      },
      status: {
        badRequest: 400,
        forbidden: 403,
        notFound: 404,
        internalServer: 500,
        notImplemented: 501,
        serviceUnavailable: 503,
        gatewayTimeout: 504,
        frontendCommonError: -1,
        ok: 200
      },
      name: {
        AbortError: "AbortError",
        DOMException: "DOMException"
      }
    },
    SCHEMA: {
      image: "http://schema.org/ImageObject",
      offer: "http://schema.org/Offer",
      product: "http://schema.org/Product",
      availability: {
        outOfStock: "https://schema.org/OutOfStock",
        inStock: "https://schema.org/InStock"
      }
    },
    MAP_DEFAULT_RUSSIA: [55.753215, 37.622504],
    DELIVERY_OPTIONS: [
      {
        id: 0,
        name: "courier",
        text: "byCourierToTheDoor",
        startedPrice: 189,
        fileName: "promotionRules"
      },
      {
        id: 1,
        name: "pickup",
        text: "toOrderPickupPoint",
        startedPrice: 169,
        fileName: "promotionRules"
      },
      {
        id: 2,
        name: "shop",
        text: "pickupFromStore",
        startedPrice: null,
        fileName: ""
      },
      {
        id: 3,
        name: "courier-express",
        text: "expressDelivery",
        startedPrice: 99,
        fileName: ""
      }
    ],
    MOSCOW_PFM: "C001",
    BONUS_DECLINATION: "bonusPlural",
    ACTIVE_DECLINATION: "activePlural",
    INACTIVE_DECLINATION: "inactivePlural",
    FULFILLED_REQUEST: "fulfilled",
    REJECTED_REQUEST: "rejected",
    // TODO "временный" костыль так как не все загружены картинки в БД
    FAKE_VARIANT: "fake",
    PHONE_VALIDATE: {
      ae: {
        mask: "+971 ## ### ## ##",
        rule: /\+971\u0020\d{2}\u0020\d{3}\u0020\d{2}\u0020\d{2}/,
        formatDisplay: (e) => (e = e.toString(), [
          "+" + e.slice(0, 3),
          e.slice(3, 5),
          e.slice(5, 8),
          e.slice(8, 10),
          e.slice(10)
        ].join(" "))
      },
      ru: {
        mask: "+7(###)-###-##-##",
        rule: /\+7\(\d{3}\)-\d{3}-\d{2}-\d{2}/,
        formatDisplay: (e) => (e = e.toString(), `+7 (${e.slice(1, 4)}) ${e.slice(4, 7)}-${e.slice(7, 9)}-${e.slice(9)}`)
      },
      kz: {
        mask: "+7(###)-###-##-##",
        rule: /\+7\([76]\d{2}\)-\d{3}-\d{2}-\d{2}/,
        formatDisplay: (e) => (e = e.toString(), `+7 (${e.slice(1, 4)}) ${e.slice(4, 7)}-${e.slice(7, 9)}-${e.slice(9)}`)
      },
      lv: {
        mask: "+371 #### ####",
        rule: /\+371\u0020\d{4}\u0020\d{4}/,
        formatDisplay: (e) => (e = e.toString(), `+${e.slice(0, 3)} ${e.slice(3, 7)} ${e.slice(7)}`)
      },
      by: {
        mask: "+375 (##) ###-##-##",
        rule: /\+375\u0020\(\d{2}\)\u0020\d{3}-\d{2}-\d{2}/,
        formatDisplay: (e) => (e = e.toString(), `+${e.slice(0, 3)} (${e.slice(3, 5)}) 
                ${e.slice(5, 8)}-${e.slice(8, 10)}-${e.slice(10)}`)
      },
      en: {
        mask: "+7(###)-###-##-##",
        rule: /\+/,
        formatDisplay: () => ""
      }
    },
    /**
     * Заголовки api
     */
    HEADERS: {
      language: "x-language",
      xDeliveryType: "x-delivery-type",
      xCity: "x-city",
      xPfm: "x-pfm",
      xMark: "x-mark",
      xKey: "X-Key",
      xCountry: "X-Country",
      xWebApplicationType: "X-Web-Application-Type",
      isLogged: "is-logged",
      xOpenID: "X-Open-Id",
      contentType: "Content-Type"
    },
    /**
     * Типы полов
     */
    GENDER: {
      male: "male",
      female: "female"
    },
    /**
     * Типы недвижимости для заявок по вакансиям
     */
    VACANCY_REALTY_TYPES: {
      store: "store",
      warehouse: "warehouse",
      office: "office"
    },
    /**
     * Адреса ссылок "Работа у нас"
     */
    WORK_LINKS: {
      base: "/work",
      store: "/work/store",
      warehouse: "/work/warehouse",
      office: "/work/office",
      it: "https://tech.fix-price.com/",
      probation: "/work/probation",
      contacts: "/work/contacts"
    },
    PARTNERS_LINKS: {
      partners: "/partners",
      serviceProviders: "/partners/for-service-providers",
      purchases: "/partners/purchases",
      landlords: "/partners/for-land-lords",
      franchising: "/partners/franchising",
      other: "/partners/other",
      EDI: "/partners/edo"
    },
    /**
     * Адреса ссылок "О компании"
     */
    ABOUT_LINKS: {
      about: "/about",
      business: "/about/business-ethics",
      help: "/about/help",
      contacts: "/about/contacts",
      press: "https://media.fix-price.com/",
      qualityControl: "/about/quality-control"
    },
    /**
     * @param {Object} app
     * @returns {Array<Object>}
     */
    PARTNERS_PAGES(e) {
      return [
        {
          title: e.$t("suppliersGoods"),
          link: r.PARTNERS_LINKS.partners,
          exact: !0,
          hide: !e.$store.getters.isRussia
        },
        {
          title: e.$t("EDI.decryption"),
          link: r.PARTNERS_LINKS.EDI,
          exact: !0,
          hide: !e.$store.getters.isRussia
        },
        {
          title: e.$t("serviceProviders"),
          link: r.PARTNERS_LINKS.serviceProviders,
          exact: !0,
          hide: !e.$store.getters.isRussia
        },
        {
          title: e.$t("purchases"),
          link: r.PARTNERS_LINKS.purchases,
          exact: !0,
          hide: !e.$store.getters.isRussia
        },
        {
          title: e.$t("landlords"),
          link: r.PARTNERS_LINKS.landlords,
          exact: !0,
          hide: !e.$store.getters.isRussia
        },
        {
          title: e.$t("franchising"),
          link: r.PARTNERS_LINKS.franchising,
          exact: !0,
          hide: !e.$store.getters.isRussia
        },
        {
          title: e.$t("otherTypesCooperation"),
          link: r.PARTNERS_LINKS.other,
          exact: !0,
          hide: !e.$store.getters.isRussia
        }
      ].filter((o) => !o.hide);
    },
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
    WORK_PAGES(e) {
      return [
        {
          title: e.$t("workInStore"),
          link: r.WORK_LINKS.store,
          exact: !1
        },
        {
          title: e.$t("workInWarehouse"),
          link: r.WORK_LINKS.warehouse,
          exact: !1
        },
        {
          title: e.$t("workInOffice"),
          link: r.WORK_LINKS.office,
          exact: !1
        },
        {
          title: e.$t("workInIt"),
          link: r.WORK_LINKS.it,
          exact: !1,
          external: !0
        },
        {
          title: e.$t("probation"),
          link: r.WORK_LINKS.probation,
          exact: !0
        },
        {
          title: e.$t("contacts"),
          link: r.WORK_LINKS.contacts,
          exact: !0
        }
      ];
    },
    /**
     * @param {Object} app
     * @returns {Array<Object>}
     */
    ABOUT_PAGES(e) {
      return [
        {
          title: e.$t("aboutNav[0]"),
          link: r.ABOUT_LINKS.about,
          exact: !0
        },
        {
          title: e.$t("aboutNav[1]"),
          link: r.ABOUT_LINKS.business,
          exact: !0,
          hide: e.$store.getters.isLatvia
        },
        {
          title: e.$t("help"),
          link: r.ABOUT_LINKS.help,
          exact: !1,
          hide: !(e.$store.getters.isRussia || e.$store.getters.isKazakhstan || e.$store.getters.isBelarus)
        },
        {
          title: e.$t("aboutNav[3]"),
          link: r.ABOUT_LINKS.contacts,
          exact: !0
        },
        {
          title: e.$t("aboutNav[4]"),
          link: r.ABOUT_LINKS.press,
          exact: !1,
          hide: !e.$store.getters.isRussia,
          external: !0
        },
        {
          title: e.$t("qualityControl"),
          link: r.ABOUT_LINKS.qualityControl,
          exact: !1,
          hide: !e.$store.getters.isRussia
        }
      ].filter((o) => !o.hide);
    },
    ORDER: {
      status: {
        noPayed: 1,
        payed: 2,
        cancelled: 8,
        issued: 11,
        queue: -1
      },
      payType: {
        payOnline: 2,
        payReceiving: 3,
        payReceivingCart: 1,
        payReceivingFiat: 2
      },
      payMethod: {
        online: "online",
        inPlace: "inPlace",
        cartInPlace: "cartInPlace",
        fiatInPlace: "fiatInPlace"
      }
    },
    APPLICATION_LINKS: {
      ru: {
        googlePlay: "https://play.google.com/store/apps/details?id=ru.bestprice.fixprice&hl=ru&gl=RU",
        appleStore: "https://apps.apple.com/ru/app/fix-price/id1460007771",
        // eslint-disable-next-line max-len
        appGallery: "https://appgallery.huawei.com/app/C105661683?sharePrepath=ag&locale=ru_RU&source=appshare&subsource=C105661683&shareTo=com.miui.notes&shareFrom=appmarket",
        ruStore: "https://apps.rustore.ru/app/ru.bestprice.fixprice"
      },
      by: {
        googlePlay: "https://play.google.com/store/apps/details?id=ru.bestprice.fixprice",
        appleStore: "https://apps.apple.com/ru/app/fix-price/id1460007771"
      },
      kz: {
        googlePlay: "https://play.google.com/store/apps/details?id=ru.bestprice.fixprice",
        appleStore: "https://apps.apple.com/ru/app/fix-price/id1460007771"
      }
    },
    APPLICATION_IMAGES: {
      ru: {
        googlePlay: "/img/DownloadAppBanner/google-play.svg",
        appleStore: "/img/DownloadAppBanner/apple-store.svg",
        appGallery: "/img/DownloadAppBanner/app-gallery.svg",
        ruStore: "/img/DownloadAppBanner/ru-store.svg"
      },
      kk: {
        googlePlay: "/img/DownloadAppBanner/google-play-kk.svg",
        appleStore: "/img/DownloadAppBanner/apple-store-kk.svg"
      }
    },
    APPLICATION_YM_PARAMS: {
      ruStore: "rustore",
      googlePlay: "google_play",
      appStore: "appstore",
      appGallery: "appgallery"
    },
    OBTAIN_METHOD: {
      courier: {
        id: 0,
        name: "courier"
      },
      courierExpress: {
        id: 0,
        name: "courier-express"
      },
      store: {
        id: 1,
        name: "store"
      },
      pickup: {
        id: 2,
        name: "pickup"
      }
    },
    MAX_FAVORITE_ADDRESSES: 10,
    COURIER_SERVICE: {
      cdek: 2,
      boxberry: 1,
      russianPost: 3,
      yandexDelivery: 7
    },
    SERVICES_NAME: {
      cdek: "СДЭК",
      boxberry: "Boxberry",
      russianPost: "Почта России",
      yandexDelivery: "Яндекс Доставка"
    },
    DELIVERY_SERVICE: {
      russianPost: 7
    },
    DELIVERY_SERVICES: {
      BoxberryCourier: {
        id: 1,
        type: 1,
        name: "Курьерская доставка Boxberry"
      },
      BoxberryPickup: {
        id: 2,
        type: 1,
        name: "ПВЗ Boxberry"
      },
      CDEKCourier: {
        id: 4,
        type: 2,
        name: "Курьерская доставка СДЭК"
      },
      CDEKPickup: {
        id: 5,
        type: 2,
        name: "ПВЗ СДЭК"
      },
      RussianPostCourier: {
        id: 7,
        type: 3,
        name: "Курьер Почта РФ"
      },
      RussianPostPickup: {
        id: 8,
        type: 3,
        name: "Почтовое отделение Почта РФ"
      }
    },
    // Раскоментить если понадобится получать название по сервису
    // DELIVERY_SERVICES_MAP_IDS: new Map(Object.entries(this.DELIVERY_SERVICE).map(serviceEntry => serviceEntry.reverse())),
    FEEDBACK_THEME_ALIASES: {
      other: "other",
      bonus: "bonus",
      complaint: "complaint",
      errorAuth: "error-auth",
      errorWeb: "error_web",
      errorMp: "error_mp",
      order: "order",
      vaccination: "vaccination",
      pr: "pr",
      sublease: "sublease",
      resume: "resume",
      deliveryGoods: "delivery_goods"
    },
    DELIVERY_NAMES: {
      store: "store",
      courier: "courier",
      express: "courier-express"
    },
    PAYMENT_TYPE: {
      inStore: 1,
      online: 2,
      uponReceipt: 3
    },
    PAYMENT_TYPES_YM: {
      paymentUponReceipt: "payment_upon_receipt",
      online: "online"
    },
    REQUEST_HEADERS: {
      mark: "x-mark",
      xClientRoute: "X-Client-Route"
    },
    DISCOUNT_TYPE: {
      specialPrice: 1,
      loyaltyPoints: 3,
      promocode: 4
    },
    POINTS_UNAVAILABILITY_REASONS: {
      pickup: {
        inactive: "inactive",
        update: "update"
      },
      store: {
        inactive: !1
      }
    },
    LOYALTY_PROGRAM: "loyaltyProgram",
    PROMOCODE_PROGRAM: "promocode",
    FIRST_IMPRESSION_CONVERSION: "firstImpressionConversion",
    ORDERS_TYPES: {
      online: "online",
      store: "store"
    },
    CONTENT_TYPES: {
      link: "link",
      text: "text"
    },
    ORDER_STATUS: {
      fail: 0,
      success: 1,
      sms: 2
    },
    EDGE_CASE_REASON: {
      error: "error",
      empty: "empty"
    },
    SIZES: {
      xs: "xs",
      sm: "sm",
      md: "md",
      lg: "lg",
      xl: "xl"
    },
    MENU_ALIASES: {
      notifications: "notifications"
    },
    STORY: {
      slidesAutoplay: 5e3,
      speed: 400
    },
    ERROR_INFORMER_BLACK: "black",
    DELIVERY_FLAT_MAX_LENGTH: 6,
    NOTIFICATION_PERSMISSIONS: {
      default: "default",
      granted: "granted",
      denied: "denied"
    },
    APP_HOST_TYPES: {
      TWA: "TWA"
    },
    YANDEX_COUNTERS: {
      ru: "65684692",
      kz: "91823614",
      by: "88013302",
      ae: "96185885"
    },
    MY_TRACKER_COUNTERS: {
      ru: 3251977,
      by: 3415148,
      kz: 3415158
    },
    VISIBLE_STATE: {
      visible: "visible",
      hidden: "hidden"
    },
    METRIC_LOCATIONS: {
      cart: "Корзина",
      favorites: "Избранное",
      search: "Поиск",
      catalog: "Каталог",
      productCard: "Карточка товара"
    },
    CURRENCIES: {
      ru: "RUB",
      kz: "KZT"
    },
    GRID: {
      guter: 20
    },
    REM_BASE: 10,
    FIRST_PAGE: 1,
    ONE_HUNDRED_PERCENT: 100,
    AB_FLAGS: {
      enabled: "1",
      firstElementIndex: 0
    },
    BUTTON_VARIANTS: {
      secondary: "secondary",
      primaryLight: "primary-light",
      secondaryDark: "secondary-dark"
    },
    BUTTON_TYPES: {
      filter: "filter"
    },
    BUTTON_SIZES: {
      small: "small",
      normal: "normal",
      large: "large"
    },
    POLYGON: {
      first: {
        tl: -12,
        br: -35
      },
      second: {
        tl: 30,
        br: -35
      },
      third: {
        tl: 30,
        br: 0
      },
      fourth: {
        tl: 15,
        br: 0
      },
      fifth: {
        tl: 15,
        br: 20
      },
      sixth: {
        tl: 0,
        br: 20
      },
      seventh: {
        tl: 0,
        br: 0
      },
      eighth: {
        tl: -12,
        br: 0
      }
    },
    KEY_CODES: {
      escape: 27
    },
    VIDEO_TYPE: {
      YOUTUBE: "youtube_video",
      RUTUBE: "rutube_video"
    },
    ICONS_SRC: {
      OUTLINE: {
        INFO: "/img/common/outline/info.svg",
        CROSS: "/img/common/outline/cross.svg",
        EDIT: "/img/common/outline/edit.svg",
        SPINNER: "/img/common/outline/spinner.svg",
        CHECK: "/img/common/outline/check.svg",
        ARROW: "/img/common/outline/arrow.svg",
        CHEVRON: "/img/common/outline/chevron.svg",
        PERCENT: "/img/common/outline/percent.svg",
        CLOCK: "/img/common/outline/clock.svg",
        MAP_PIN: "/img/common/outline/map_pin.svg",
        NAVIGATION: "/img/common/outline/navigation.svg",
        PAYMENT: "/img/common/outline/payment.svg",
        TRUCK: "/img/common/outline/truck.svg",
        COPY: "/img/common/outline/copy.svg",
        SEARCH: "/img/common/outline/search.svg",
        arrowRight: "/img/common/outline/arrow-right.svg",
        chevronLeft: "/img/common/outline/chevron-left.svg",
        plus: "/img/common/outline/plus.svg",
        minus: "/img/common/outline/minus.svg",
        navigation: "/img/common/outline/navigation.svg",
        trash: "/img/common/outline/trash.svg",
        filter: "/img/common/outline/filter.svg"
      },
      FILLED: {
        PIN: "/img/common/filled/pin.svg"
      }
    },
    VIDEO_DOMAIN: {
      RUTUBE: "rutube.ru",
      YOUTUBE: "www.youtube.com"
    },
    X_OPEN_ID: {
      vk: 1,
      mts: 2
    },
    CARD_TYPES: {
      blue: 400,
      black: 500
    },
    METRIC_SHIPPING_TYPES: {
      deliveryPoint: "delivery_point",
      courier: "courier",
      pickup: "pick_up"
    },
    PRODUCTS_PER_PAGE: 24,
    NOTIFICATION_TYPES: {
      promo: "promo"
    },
    TRANSACTION: {
      paymentIncrease: 2,
      // попкупка с начислением
      paymentDecrease: 3,
      // покупка со списанием
      refund: 7,
      // возврат
      settingPoints: 8,
      // Начисление баллов
      charityPointsDebiting: 11
      // списание баллов на благотворительность
    },
    ASSISTANT: {
      dataTypes: {
        control: "control",
        chunk: "chunk",
        response: "response",
        error: "error"
      },
      contentTypes: {
        start: "start",
        loader: "loader",
        end: "end"
      }
    }
  });
});
export default a();
