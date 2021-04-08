import React, {useContext} from 'react';
import {Container, Row, Col, Accordion, useAccordionButton, AccordionContext, Breadcrumb} from 'react-bootstrap';
import './css/Faq.css'

const tabs = [
    {   id: 1,
        label: "Навіщо електронний квиток місту? Чому не можна їздити як раніше?",
        description: "Є декілька вагомих причин для впровадження електронної картки. Е-квиток дає можливість заощаджувати як кошти так і час для пасажирів, а для підприємства-перевізника оптимізовує економічну роботу.\n" +
            "\n" +
            "По-перше, буде немала економія на паперових талонах – досі КП «Електроавтотранс» витрачало близько 500 тисяч гривень на рік лише на друк проїзних квитків.\n" +
            "\n" +
            "По-друге, значно покращиться облік пасажирів, як платних так і пільгових, а також контроль за доходом перевізника.\n" +
            "\n" +
            "По-третє, нова система оплати за проїзд повинна збільшити експлуатаційну швидкість комунального транспорту, бо значною мірою звільнить водіїв від функції обілечування пасажирів, дозволить здійснювати посадку і висадку пасажирів через всі двері.\n" +
            "\n" +
            "По-четверте, оперативна інформація про перевезення пасажирів допоможе краще розуміти стан і проблеми міського комунального транспорту, збільшення та зменшення випуску одиниць на конкретні маршрути."
    },
    {   id: 2,
        label: "Скільки коштуватиме картка та її термін дії?",
        description: "Орієнтовна ціна транспортної картки – 30 гривень, але всім пільговикам Івано-Франківської ОТГ, в т.ч. учням її видаватимуть безкоштовно.\n" +
            "\n" +
            "Термін дії картки 5 років. Проте, є картки з меншим терміном дії, наприклад деякі учнівські картки будуть діяти 4 роки, а для старшокласників 2 роки."
    },

    {   id: 3,
        label: "Як поповнити картку та як перевірити її баланс?",
        description: "Картку можна буде поповнювати у вуличних терміналах, а також на сайті. Баланс картки можна буде перевірити під час її валідації у транспорті, а також у персональному кабінеті на цьому ж сайті."
    },
    {   id: 4,
        label: "Чи буде введено практику тижневий/місячний/річний проїзний?",
        description: "Передбачається можливість використовувати картку в режимі тривалої дії, зокрема протягом 30 днів без обмеження кількості поїздок. Крім того, картка даватиме можливість здійснювати пересадку протягом 30 хвилин без додаткової оплати."
    },
    {   id: 5,
        label: "Який штраф передбачений при поїздці, за яку не заплатили?",
        description: "Згідно законодавства штраф становитиме 20-икратну вартість одноразового проїзду."
    },
    {   id: 6,
        label: "Коли картку зможуть купити не пільгові категорії населення? І де?",
        description: "Картки планують з’явитись у продажі з початку березня 2020 року. Їх можна буде придбати у водіїв та кондукторів КП «Електроавтотранс». Також ведуться переговори, щодо продажу карток у кіосках преси та «Галичина табак»."
    }
];

export default function FaqPage() {
    function ContextAwareToggle({ children, eventKey, callback }) {

        const { activeEventKey } = useContext(AccordionContext);
        const decoratedOnClick = useAccordionButton(
            eventKey,
            () => callback && callback(eventKey),
        );

        const isCurrentEventKey = activeEventKey === eventKey;
        return (
            <button
                type="button"
                className={isCurrentEventKey ? '' : 'collapsed'}
                aria-expanded={isCurrentEventKey ? 'true' : 'false'}
                onClick={decoratedOnClick}>
                {children}
                <div className="plus">
                    <i className="vertical"/>
                    <i className="horisontal"/>
                </div>
            </button>
        );
    }
    return (
        <section className="faq">
            <Container fluid="md">
                <Row>
                    <Col lg="12" className="pt-4">
                        <Breadcrumb>
                            <Breadcrumb.Item href="/">Головна</Breadcrumb.Item>
                        </Breadcrumb>
                    </Col>
                </Row>
            </Container>
            <Container fluid="md">
                <Row>
                    <Col md="12" className="pb-3">
                        <h1>Поширені запитання</h1>
                    </Col>
                </Row>
                <Row>
                    <Col md="12">
                        <div className="Faq">
                            <Accordion>
                                {tabs.map(tab => (
                                    <div key={tab.id} className="item">
                                          <div className="item-header">
                                            <ContextAwareToggle type="button" eventKey={tab.id}>
                                                <h4>
                                                    {tab.label}
                                                </h4>
                                            </ContextAwareToggle>
                                        </div>
                                        <Accordion.Collapse eventKey={tab.id}>
                                            <div className="item-body">
                                                <p>
                                                    {tab.description}
                                                </p>
                                            </div>
                                        </Accordion.Collapse>
                                    </div>
                                ))}
                            </Accordion>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    );
}
