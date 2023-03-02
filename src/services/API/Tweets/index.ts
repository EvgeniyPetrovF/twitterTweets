import {wait} from '../../../utils';

export interface AuthInfo {
  userName: string;
  limit?: number;
}

class TweetsAPI {
  static getTweets = async ({userName, limit}: AuthInfo) => {
    const res = await wait(3000, [
      {
        author_id: '2244994945',
        created_at: '2020-06-11T16:05:06.000Z',
        id: '1271111223220809728',
        text: 'Tune in tonight and watch as @jessicagarson takes us through running your favorite Python package in R. 🍿\n\nLearn how to use two powerful programming languages for data science together, and see a live example that uses the recent search endpoint from Twitter’s Developer Labs. https://t.co/v178oUZNuj',
      },
      {
        author_id: '2244994945',
        created_at: '2020-06-10T19:25:24.000Z',
        id: '1270799243071062889',
        text: 'As we work towards building the new Twitter API, we’ve extended the deprecation timeline for several Labs v1 endpoints. Learn more 📖 https://t.co/rRWaJYJgKk',
      },
      {
        author_id: '2244994945',
        created_at: '2020-06-09T18:08:47.000Z',
        id: '1270417572001976888',
        text: 'Annotations help you learn more about a Tweet — they can even help you find topics of interest. 🔬\n\nIn this tutorial, @suhemparack shows us how find Tweets related to COVID-19 using annotations + the filtered stream endpoint.\n\nLearn how you can, too. ⤵️\nhttps://t.co/qwVOgw0zSV',
      },
      {
        author_id: '2244994945',
        created_at: '2020-06-11T16:05:06.000Z',
        id: '1271111223220809777',
        text: 'Tune in tonight and watch as @jessicagarson takes us through running your favorite Python package in R. 🍿\n\nLearn how to use two powerful programming languages for data science together, and see a live example that uses the recent search endpoint from Twitter’s Developer Labs. https://t.co/v178oUZNuj',
      },
      {
        author_id: '2244994945',
        created_at: '2020-06-10T19:25:24.000Z',
        id: '1270799243071066434',
        text: 'As we work towards building the new Twitter API, we’ve extended the deprecation timeline for several Labs v1 endpoints. Learn more 📖 https://t.co/rRWaJYJgKk',
      },
      {
        author_id: '2244994945',
        created_at: '2020-06-09T18:08:47.000Z',
        id: '1270417572001973415',
        text: 'Annotations help you learn more about a Tweet — they can even help you find topics of interest. 🔬\n\nIn this tutorial, @suhemparack shows us how find Tweets related to COVID-19 using annotations + the filtered stream endpoint.\n\nLearn how you can, too. ⤵️\nhttps://t.co/qwVOgw0zSV',
      },
      {
        author_id: '2244994945',
        created_at: '2020-06-11T16:05:06.000Z',
        id: '12711112232208094535',
        text: 'Tune in tonight and watch as @jessicagarson takes us through running your favorite Python package in R. 🍿\n\nLearn how to use two powerful programming languages for data science together, and see a live example that uses the recent search endpoint from Twitter’s Developer Labs. https://t.co/v178oUZNuj',
      },
      {
        author_id: '2244994945',
        created_at: '2020-06-10T19:25:24.000Z',
        id: '1270799243071061748',
        text: 'As we work towards building the new Twitter API, we’ve extended the deprecation timeline for several Labs v1 endpoints. Learn more 📖 https://t.co/rRWaJYJgKk',
      },
      {
        author_id: '2244994945',
        created_at: '2020-06-09T18:08:47.000Z',
        id: '12704175720019754364',
        text: 'Annotations help you learn more about a Tweet — they can even help you find topics of interest. 🔬\n\nIn this tutorial, @suhemparack shows us how find Tweets related to COVID-19 using annotations + the filtered stream endpoint.\n\nLearn how you can, too. ⤵️\nhttps://t.co/qwVOgw0zSV',
      },
      {
        author_id: '2244994945',
        created_at: '2020-06-11T16:05:06.000Z',
        id: '1271111223220808164',
        text: 'Tune in tonight and watch as @jessicagarson takes us through running your favorite Python package in R. 🍿\n\nLearn how to use two powerful programming languages for data science together, and see a live example that uses the recent search endpoint from Twitter’s Developer Labs. https://t.co/v178oUZNuj',
      },
      {
        author_id: '2244994945',
        created_at: '2020-06-10T19:25:24.000Z',
        id: '1270799243071065348',
        text: 'As we work towards building the new Twitter API, we’ve extended the deprecation timeline for several Labs v1 endpoints. Learn more 📖 https://t.co/rRWaJYJgKk',
      },
      {
        author_id: '2244994945',
        created_at: '2020-06-09T18:08:47.000Z',
        id: '1270417572001970000',
        text: 'Annotations help you learn more about a Tweet — they can even help you find topics of interest. 🔬\n\nIn this tutorial, @suhemparack shows us how find Tweets related to COVID-19 using annotations + the filtered stream endpoint.\n\nLearn how you can, too. ⤵️\nhttps://t.co/qwVOgw0zSV',
      },
      {
        author_id: '2244994945',
        created_at: '2020-06-11T16:05:06.000Z',
        id: '1271111223220809999',
        text: 'Tune in tonight and watch as @jessicagarson takes us through running your favorite Python package in R. 🍿\n\nLearn how to use two powerful programming languages for data science together, and see a live example that uses the recent search endpoint from Twitter’s Developer Labs. https://t.co/v178oUZNuj',
      },
      {
        author_id: '2244994945',
        created_at: '2020-06-10T19:25:24.000Z',
        id: '1270799243071068888',
        text: 'As we work towards building the new Twitter API, we’ve extended the deprecation timeline for several Labs v1 endpoints. Learn more 📖 https://t.co/rRWaJYJgKk',
      },
      {
        author_id: '2244994945',
        created_at: '2020-06-09T18:08:47.000Z',
        id: '1270417572001977777',
        text: 'Annotations help you learn more about a Tweet — they can even help you find topics of interest. 🔬\n\nIn this tutorial, @suhemparack shows us how find Tweets related to COVID-19 using annotations + the filtered stream endpoint.\n\nLearn how you can, too. ⤵️\nhttps://t.co/qwVOgw0zSV',
      },
      {
        author_id: '2244994945',
        created_at: '2020-06-11T16:05:06.000Z',
        id: '1271111223220806666',
        text: 'Tune in tonight and watch as @jessicagarson takes us through running your favorite Python package in R. 🍿\n\nLearn how to use two powerful programming languages for data science together, and see a live example that uses the recent search endpoint from Twitter’s Developer Labs. https://t.co/v178oUZNuj',
      },
      {
        author_id: '2244994945',
        created_at: '2020-06-10T19:25:24.000Z',
        id: '1270799243071065555',
        text: 'As we work towards building the new Twitter API, we’ve extended the deprecation timeline for several Labs v1 endpoints. Learn more 📖 https://t.co/rRWaJYJgKk',
      },
      {
        author_id: '2244994945',
        created_at: '2020-06-09T18:08:47.000Z',
        id: '1270417572001974444',
        text: 'Annotations help you learn more about a Tweet — they can even help you find topics of interest. 🔬\n\nIn this tutorial, @suhemparack shows us how find Tweets related to COVID-19 using annotations + the filtered stream endpoint.\n\nLearn how you can, too. ⤵️\nhttps://t.co/qwVOgw0zSV',
      },
      {
        author_id: '2244994945',
        created_at: '2020-06-11T16:05:06.000Z',
        id: '1271111223220803333',
        text: 'Tune in tonight and watch as @jessicagarson takes us through running your favorite Python package in R. 🍿\n\nLearn how to use two powerful programming languages for data science together, and see a live example that uses the recent search endpoint from Twitter’s Developer Labs. https://t.co/v178oUZNuj',
      },
      {
        author_id: '2244994945',
        created_at: '2020-06-10T19:25:24.000Z',
        id: '1270799243071062222',
        text: 'As we work towards building the new Twitter API, we’ve extended the deprecation timeline for several Labs v1 endpoints. Learn more 📖 https://t.co/rRWaJYJgKk',
      },
      {
        author_id: '2244994945',
        created_at: '2020-06-09T18:08:47.000Z',
        id: '1270417572001971111',
        text: 'Annotations help you learn more about a Tweet — they can even help you find topics of interest. 🔬\n\nIn this tutorial, @suhemparack shows us how find Tweets related to COVID-19 using annotations + the filtered stream endpoint.\n\nLearn how you can, too. ⤵️\nhttps://t.co/qwVOgw0zSV',
      },
      {
        author_id: '2244994945',
        created_at: '2020-06-11T16:05:06.000Z',
        id: '1271111223220807188',
        text: 'Tune in tonight and watch as @jessicagarson takes us through running your favorite Python package in R. 🍿\n\nLearn how to use two powerful programming languages for data science together, and see a live example that uses the recent search endpoint from Twitter’s Developer Labs. https://t.co/v178oUZNuj',
      },
      {
        author_id: '2244994945',
        created_at: '2020-06-10T19:25:24.000Z',
        id: '1270799243071065168',
        text: 'As we work towards building the new Twitter API, we’ve extended the deprecation timeline for several Labs v1 endpoints. Learn more 📖 https://t.co/rRWaJYJgKk',
      },
      {
        author_id: '2244994945',
        created_at: '2020-06-09T18:08:47.000Z',
        id: '1270417572001973689',
        text: 'Annotations help you learn more about a Tweet — they can even help you find topics of interest. 🔬\n\nIn this tutorial, @suhemparack shows us how find Tweets related to COVID-19 using annotations + the filtered stream endpoint.\n\nLearn how you can, too. ⤵️\nhttps://t.co/qwVOgw0zSV',
      },
      {
        author_id: '2244994945',
        created_at: '2020-06-11T16:05:06.000Z',
        id: '1271111223220806270',
        text: 'Tune in tonight and watch as @jessicagarson takes us through running your favorite Python package in R. 🍿\n\nLearn how to use two powerful programming languages for data science together, and see a live example that uses the recent search endpoint from Twitter’s Developer Labs. https://t.co/v178oUZNuj',
      },
      {
        author_id: '2244994945',
        created_at: '2020-06-10T19:25:24.000Z',
        id: '1270799243071069521',
        text: 'As we work towards building the new Twitter API, we’ve extended the deprecation timeline for several Labs v1 endpoints. Learn more 📖 https://t.co/rRWaJYJgKk',
      },
      {
        author_id: '2244994945',
        created_at: '2020-06-09T18:08:47.000Z',
        id: '1270417572001975831',
        text: 'Annotations help you learn more about a Tweet — they can even help you find topics of interest. 🔬\n\nIn this tutorial, @suhemparack shows us how find Tweets related to COVID-19 using annotations + the filtered stream endpoint.\n\nLearn how you can, too. ⤵️\nhttps://t.co/qwVOgw0zSV',
      },
      {
        author_id: '2244994945',
        created_at: '2020-06-11T16:05:06.000Z',
        id: '1271111223220806431',
        text: 'Tune in tonight and watch as @jessicagarson takes us through running your favorite Python package in R. 🍿\n\nLearn how to use two powerful programming languages for data science together, and see a live example that uses the recent search endpoint from Twitter’s Developer Labs. https://t.co/v178oUZNuj',
      },
      {
        author_id: '2244994945',
        created_at: '2020-06-10T19:25:24.000Z',
        id: '1270799243071067126',
        text: 'As we work towards building the new Twitter API, we’ve extended the deprecation timeline for several Labs v1 endpoints. Learn more 📖 https://t.co/rRWaJYJgKk',
      },
      {
        author_id: '2244994945',
        created_at: '2020-06-09T18:08:47.000Z',
        id: '1270417572001977823',
        text: 'Annotations help you learn more about a Tweet — they can even help you find topics of interest. 🔬\n\nIn this tutorial, @suhemparack shows us how find Tweets related to COVID-19 using annotations + the filtered stream endpoint.\n\nLearn how you can, too. ⤵️\nhttps://t.co/qwVOgw0zSV',
      },
      {
        author_id: '2244994945',
        created_at: '2020-06-11T16:05:06.000Z',
        id: '1271111223220806417',
        text: 'Tune in tonight and watch as @jessicagarson takes us through running your favorite Python package in R. 🍿\n\nLearn how to use two powerful programming languages for data science together, and see a live example that uses the recent search endpoint from Twitter’s Developer Labs. https://t.co/v178oUZNuj',
      },
      {
        author_id: '2244994945',
        created_at: '2020-06-10T19:25:24.000Z',
        id: '1270799243071061368',
        text: 'As we work towards building the new Twitter API, we’ve extended the deprecation timeline for several Labs v1 endpoints. Learn more 📖 https://t.co/rRWaJYJgKk',
      },
      {
        author_id: '2244994945',
        created_at: '2020-06-09T18:08:47.000Z',
        id: '1270417572001971578',
        text: 'Annotations help you learn more about a Tweet — they can even help you find topics of interest. 🔬\n\nIn this tutorial, @suhemparack shows us how find Tweets related to COVID-19 using annotations + the filtered stream endpoint.\n\nLearn how you can, too. ⤵️\nhttps://t.co/qwVOgw0zSV',
      },
      {
        author_id: '2244994945',
        created_at: '2020-06-11T16:05:06.000Z',
        id: '1271111223220805267',
        text: 'Tune in tonight and watch as @jessicagarson takes us through running your favorite Python package in R. 🍿\n\nLearn how to use two powerful programming languages for data science together, and see a live example that uses the recent search endpoint from Twitter’s Developer Labs. https://t.co/v178oUZNuj',
      },
      {
        author_id: '2244994945',
        created_at: '2020-06-10T19:25:24.000Z',
        id: '1270799243071069876',
        text: 'As we work towards building the new Twitter API, we’ve extended the deprecation timeline for several Labs v1 endpoints. Learn more 📖 https://t.co/rRWaJYJgKk',
      },
      {
        author_id: '2244994945',
        created_at: '2020-06-09T18:08:47.000Z',
        id: '1270417572001975678',
        text: 'Annotations help you learn more about a Tweet — they can even help you find topics of interest. 🔬\n\nIn this tutorial, @suhemparack shows us how find Tweets related to COVID-19 using annotations + the filtered stream endpoint.\n\nLearn how you can, too. ⤵️\nhttps://t.co/qwVOgw0zSV',
      },
    ]);
    return res.slice(res.length - (limit ?? 20));
  };
}

export default TweetsAPI;
