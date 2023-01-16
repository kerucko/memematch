# memematch

# Memematch - определение совместимости по мемам
## О проекте 
Проект создавался для определения совместимости по мемным предпочтениям. Первый пользователь выбирает количество мемов, по которым он хотел бы вместе со своим партнером узнать совместимость. На выбор дается 3 значения: 15, 30 и 60 картинок, чем больше это значение, тем точнее будет результат. Далее пользователь перенаправляется на страницу со шкалой оценок от -3 до 3 (связано с социологией), где -3 - вообще не понравилось, а 3 - очень смешно хаха ржач до слез. Также на странице рандомно генерируется мем из дата сета. Дата сет формировался на основании мемов и описания к ним, его составляли частично мы сами, а частично взяли из тг канала текстовые мемы (t.me/text_meme), поэтому за актуальность мемов не ручаемся. По окончании оценивания мемов пользователь перенаправляется на страницу, на которой генерируется ссылка на прохождение теста с теми же мемами для другого пользователя. Эту ссылку можно отправить как одному другу, так и сразу нескольким, результат после прохождения будет показываться у второго пользователя. Хочется заметить, что если бы первым пользователем был какой-нибудь стример, он бы мог пройти этот тест и скинуть сгенерированную ссылку в чат, чтобы любой его зритель мог узнать совместимость по мемам со своим любимым стримером. При желании тест можно пройти заново.

Когда первый пользователь прошел тест, то его результаты загружаются в базу данных, генерируется уникальная ссылка, далее отправляется запрос на сохранение в базу данных. В идее нейронная сеть должна была сравнивать разные мемы на основе их текстовых описаний с помощью перплексии (идея - habr.com/ru/company/sberbank/blog/550056/) и показывать двум пользователям разные мемы, но с похожей тематикой, и тогда сравнение происходило бы по тематике мемов, а не просто по их оценкам. Мы нашли только две реализации нужной нам функции (github.com/ai-forever/ru-gpts/issues/79), но каждая из них выдавала ошибки, и мы не смогли с этим разобраться. Ноутбук, в котором мы пытались это реализовать, находится на гугл диске (ссылка будет в 6 пункте). Поэтому было принято решение показывать двум пользователям одинаковые мемы, присвоить каждой разности в оценках коэффициент для того, чтобы определить совместимость как произведение этих коэффициентов. 

Наша задача осложнилась тем, что в команде каждый участник работал со своими задачами впервые, никому из нас до этого не приходилось работать с ООП и нейронками, да даже сайт мы создавали в первый раз.
