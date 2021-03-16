import React, {useContext} from 'react';
import {Container, Row, Card, Col, Accordion, useAccordionToggle, AccordionContext, Button} from 'react-bootstrap';
import './Faq.css'

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
    }
];

export default function Faq() {
    function ContextAwareToggle({ children, eventKey, callback }) {
        const currentEventKey = useContext(AccordionContext);

        const decoratedOnClick = useAccordionToggle(
            eventKey,
            () => callback && callback(eventKey),
        );

        const isCurrentEventKey = currentEventKey === eventKey;

        return (
            <button
                type="button"
                data-toggle="collapse"
                className={isCurrentEventKey ? 'collapsed' : ''}
                aria-expanded={isCurrentEventKey ? 'false' : 'true'}
                onClick={decoratedOnClick}>
                {children}
                <div className="plus">
                    <i className="vertical"/>
                    <i className="horisontal"/>
                </div>
            </button>
        );
    }

    // <button type="button" data-toggle="collapse" data-target="#collapse-1-1" aria-expanded="false"
    //         className="collapsed">
    //     Що таке інтегрована система електронної ідентифікації (ICEI)?
    //     <div className="plus">
    //         <i className="vertical"></i>
    //         <i className="horisontal"></i>
    //     </div>
    // </button>
    return (
        <section className="faq pt-7">
            <Container fluid="md">
                <Row>
                    <Col md="12" className="pb-3">
                        <h1>Поширені запитання</h1>
                    </Col>
                </Row>
                <Row>
                    <Col md="12">
                        <div className="Faq">
                            {tabs.map(tab => (
                                <Accordion key={tab.id}>
                                    <div className="item">
                                        <div className="item-header">
                                            <ContextAwareToggle type="button" eventKey={tab.id}>
                                                {tab.label}
                                                {/*<ContextAwareToggle eventKey={tab.id}/>*/}
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
                                </Accordion>
                                // <Accordion key={tab.id} className="faq-border">
                                //     <Card>
                                //         <Button as={Card.Header} eventKey={tab.id}>
                                //             <Card.Title>{tab.label}</Card.Title>
                                //             <ContextAwareToggle eventKey={tab.id}></ContextAwareToggle>
                                //         </Button>
                                //         <Accordion.Collapse eventKey={tab.id}>
                                //             <Card.Body>{tab.description}</Card.Body>
                                //         </Accordion.Collapse>
                                //     </Card>
                                // </Accordion>
                            ))}
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    );
}

//
//
// function ContextAwareToggle({ children, eventKey, callback }) {
//     const currentEventKey = useContext(AccordionContext);
//
//     const decoratedOnClick = useAccordionToggle(
//         eventKey,
//         () => callback && callback(eventKey),
//     );
//
//     const isCurrentEventKey = currentEventKey === eventKey;
//
//     return (
//         <button
//             type="button"
//             className="button-faq"
//             style={{ backgroundColor: isCurrentEventKey ? 'pink' : 'lavender' }}
//             onClick={decoratedOnClick}
//         >
//             {children}
//         </button>
//     );
// }
//
// const Faq = () => (
//         <section className="faq pt-7">
//             <Container fluid="md">
//                 <Row>
//                     <Col md="12" className="pb-3">
//                         <h1>Поширені запитання</h1>
//                     </Col>
//                 </Row>
//                 <Row>
//                     <Col md="12">
//                         <Accordion>
//                             <Card className="faq-border">
//                                 <Card.Header>
//                                     <Card.Title>Навіщо електронний квиток місту? Чому не можна їздити як раніше?</Card.Title>
//                                     <ContextAwareToggle eventKey="0">Click me!</ContextAwareToggle>
//                                 </Card.Header>
//                                 <Accordion.Collapse eventKey="0">
//                                     <Card.Body>
//                                         <blockquote className="blockquote mb-0">
//                                             <p className="page-text">Є декілька вагомих причин для впровадження електронної картки.
//                                                 Е-квиток дає можливість заощаджувати як кошти так і час для пасажирів, а для
//                                                 підприємства-перевізника оптимізовує економічну роботу.</p>
//                                             <p className="page-text">По-перше, буде немала економія на паперових талонах – досі КП
//                                                 «Електроавтотранс» витрачало близько 500 тисяч гривень на рік лише на друк проїзних
//                                                 квитків.</p>
//                                             <p className="page-text">По-друге, значно покращиться облік пасажирів, як платних так і
//                                                 пільгових, а також контроль за доходом перевізника.</p>
//                                             <p className="page-text">По-третє, нова система оплати за проїзд повинна збільшити
//                                                 експлуатаційну швидкість комунального транспорту, бо значною мірою звільнить водіїв від
//                                                 функції обілечування пасажирів, дозволить здійснювати посадку і висадку пасажирів через
//                                                 всі двері.</p>
//                                             <p className="page-text">По-четверте, оперативна інформація про перевезення пасажирів
//                                                 допоможе краще розуміти стан і проблеми міського комунального транспорту, збільшення та
//                                                 зменшення випуску одиниць на конкретні маршрути.</p>
//                                         </blockquote>
//                                     </Card.Body>
//                                 </Accordion.Collapse>
//                             </Card>
//                             <Card className="faq-border">
//                                 <Card.Header>
//                                     <Card.Title>Скільки коштуватиме картка та її термін дії?</Card.Title>
//                                     <ContextAwareToggle eventKey="1">Click me!</ContextAwareToggle>
//                                 </Card.Header>
//                                 <Accordion.Collapse eventKey="1">
//                                     <Card.Body>
//                                         <blockquote className="blockquote mb-0">
//                                             <p className="page-text">Орієнтовна ціна транспортної картки – 30 гривень, але всім пільговикам
//                                                 Івано-Франківської ОТГ, в т.ч. учням її видаватимуть безкоштовно. </p>
//                                             <p className="page-text">Термін дії картки 5 років. Проте, є картки з меншим терміном дії, наприклад
//                                                 деякі учнівські картки будуть діяти 4 роки, а для старшокласників 2 роки.</p>
//                                         </blockquote>
//                                     </Card.Body>
//                                 </Accordion.Collapse>
//                             </Card>
//                             <Card className="faq-border">
//                                 <Card.Header>
//                                     <Card.Title>Як поповнити картку та як перевірити її баланс?</Card.Title>
//                                     <ContextAwareToggle eventKey="2">Click me!</ContextAwareToggle>
//                                 </Card.Header>
//                                 <Accordion.Collapse eventKey="2">
//                                     <Card.Body>
//                                         <blockquote className="blockquote mb-0">
//                                             <p className="page-text">Картку можна буде поповнювати у вуличних терміналах, а також на сайті.
//                                                 Баланс картки можна буде перевірити під час її валідації у транспорті, а також у персональному кабінеті на цьому ж сайті. </p>
//                                         </blockquote>
//                                     </Card.Body>
//                                 </Accordion.Collapse>
//                             </Card>
//                         </Accordion>
//                     </Col>
//                 </Row>
//             </Container>
//         </section>
// );
// export default Faq;

