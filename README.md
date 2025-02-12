 <h2>Oppgaver</h2>
                <ol>
                    <li>Studer koden og prøv å forstå mest mulig av hva som foregår. CSS er ikke viktig, men på
                        <tt>board</tt> brukes <tt>position: absolute</tt>
                        for å kunne legge brikkene delvis oppå hverandre, og dette har vi ikke brukt i kurset før.
                        (Det er noe man bør unngå å bruke.) Brikkene har jeg stjålet herfra: <a target="_new" href="https://codepen.io/ProfessorSamoff/pen/ByJoaE">codepen.io/ProfessorSamoff/pen/ByJoaE</a>
                        Jeg har ikke studert i detalj hvordan de er bygget, og det trenger ikke dere gjøre heller.                         
                        <br/>&nbsp;
                    </li>
                    <li>Så skal vi i gang å endre på dette. Dere må på ingen måte forstå alt som foregår for å gjøre disse
                        oppgavene. Sånn er det i bedrift også;
                        du går inn og gjør endring på en liten del av koden uten å forstå alt rundt. 
                        <b>Hvert team må vurdere hvor mye eller lite av denne oppgaven dere vil gjøre</b>. Alle bør gjøre litt, men 
                        det kan være at de siste oppgavene er riktige å hoppe over for noen team.
                        <br/>&nbsp;
                        </li>
                    <li>
                        Hvis man trykker på den første brikken nederst til venstre på siden, kalles funksjonen
                        <tt>addNormalPuzzlePieceToBoard()</tt>. (Ev. høyreklikk på denne brikken i nettleseren og velg inspiser. Da vil du 
                        se HTML-koden som ligger bak.)
                        Lag funksjonen <tt>addNormalPuzzlePieceToBoard()</tt>, slik at brikken legges til på brettet. 
                        Kommenter ut linjene som begynner med <tt>addPuzzlePiece('board'...</tt> - de var bare ment for å vise eksempler på hvordan man kan legge til ulike brikker i 
                        ulike posisjoner på brettet. Men eksperimenter med dem for å forstå hvordan de ulike verdiene man kan sende inn som argument påvirker sluttresultatet<br/>
                        For at skjøtene mellom brikkene skal virke, må vi tegne opp dette fra øverst til høyre, så mot venstre - og så starte på neste linje helt til høyre. 
                        &nbsp;<br/>
                    </li>
                    <li>
                        Utvid funksjonen slik at første gang den kalles legges det til en brikke med 24 som argument for både <tt>leftPosition</tt> og  0 for <tt>topPosition</tt>.<br/>&nbsp;
                        Og at for hver gang den kalles så brukes det 6 mindre enn forrige gang for <tt>leftPosition</tt>. (Første gang 24, så 18, så 12, så 6 og så 0.)
                    </li>
                    <li>
                        Utvid funksjonen slik at hvis man har kalt funksjonen fem ganger så bruker den igjen 24 for <tt>leftPosition</tt> og bruker 6 mer enn forrige gang for <tt>topPosition</tt>.
                        <br/>&nbsp;
                    </li>
                    <li>
                        Sørg for at det annenhver gang blir farge 1 og annenhver gang farge 2.<br/>&nbsp;
                    </li>
                    <li>
                        Lag ferdig knapperaden slik at det er knapper for alle disse alternativene: 
                        <ul>
                            <li>Normal brikke</li>
                            <li>Slett toppkant - ellers normal</li>
                            <li>Slett høyrekant - ellers normal</li>
                            <li>Slett bunnkant - ellers normal</li>
                            <li>Slett venstrekant - ellers normal</li>
                            <li>Slett hjørne i topp og mot venstre - ellers normal</li>
                            <li>Slett hjørne i topp og mot høyre - ellers normal</li>
                            <li>Slett hjørne i bunn og mot venstre - ellers normal</li>
                            <li>Slett hjørne i bunn og mot høyre - ellers normal</li>
                        </ul>
                        Sørg for at alle knappene virker og legger til riktig type brikke. <br/>&nbsp;
                    </li>
                    <li>
                        Implementer følgende regler:
                        <ul>
                            <li>På første rad kan man bare legge til brikker som har slett topp</li>
                            <li>På siste rad kan man bare legge til brikker som har slett bunn</li>
                            <li>I første kolonne kan man bare legge til brikker som har slett venstrekant</li>
                            <li>I siste kolonne kan man bare legge til brikker som har slett høyrekant</li>
                        </ul>
                    </li>

                </ol>
            `;