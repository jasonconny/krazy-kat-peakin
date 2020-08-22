import * as React from 'react';
import { GratefulDeadContext } from '../../providers/GratefulDeadProvider';
import { PrimaryLayout } from '../../components/layouts';

const HomeView: React.FC = () => {
    const gratefulDead = React.useContext(GratefulDeadContext);

    return (
        <PrimaryLayout>
            <section>
                <h1>Krazy Kat Peakin'</h1>

                <h2>{gratefulDead?.name}</h2>

                <ul>
                    {
                        gratefulDead?.members
                            .filter(member => !!member)
                            .map((member, index) => (
                                <li key={index}>{member.name}</li>
                            ))
                    }
                </ul>
            </section>
        </PrimaryLayout>
    );
};

export default HomeView;
