import { useState } from 'react';
import type { TeamMember } from '../data/teamData';
import { teamMembersData } from '../data/teamData';

const Team = () => {
    const [hoveredMember, setHoveredMember] = useState<TeamMember | null>(null);
    const [hoverPosition, setHoverPosition] = useState<{ x: number; y: number }>({ x: 0, y: 0 });

    const handleMouseEnter = (member: TeamMember, event: React.MouseEvent) => {
        setHoveredMember(member);
        const rect = event.currentTarget.getBoundingClientRect();
        setHoverPosition({ x: rect.right + 10, y: (rect.bottom + (rect.height)) / 2 });
    };

    const handleMouseLeave = () => {
        setHoveredMember(null);
    };

    return (
        <section id="team" className="team-section">
            <div className="team-background-pattern"></div>
            <div className="container">
                <h2 className="section-title">Notre Équipe</h2>
                <p className="section-subtitle">
                    Découvrez les légendes qui forment l'élite de Timeless Esport
                </p>

                {/* Photo de groupe alignée horizontalement */}
                <div className="team-photo-lineup">
                    {teamMembersData.map((member, index) => {
                        // Configuration pour chaque membre selon leur position dans l'image
                        const configs = [
                            { scale: 0.75, zIndex: 2, left: '730px', top: '300px' },
                            { scale: 0.72, zIndex: 3, left: '430px', top: '310px' },
                            { scale: 1, zIndex: 5, left: '100px', top: '250px' },
                            { scale: 0.77, zIndex: 3, right: '230px', top: '290px' },
                            { scale: 0.75, zIndex: 2, right: '670px', top: '360px' },
                        ];

                        const config = configs[index];

                        return (
                            <div
                                key={index}
                                className="team-member-photo"
                                style={{
                                    transform: `scale(${config.scale})`,
                                    zIndex: config.zIndex,
                                    position: 'relative',
                                    left: config.left,
                                    right: config.right,
                                    top: config.top
                                }}
                                onMouseEnter={(event) => handleMouseEnter(member, event)}
                                onMouseLeave={handleMouseLeave}
                            >
                                <img
                                    src={member.avatar}
                                    alt={`${member.name} - ${member.role}`}
                                    className="member-image"
                                />
                            </div>
                        );
                    })}
                </div>

                {hoveredMember && (
                    <div
                        className="member-hover-info"
                        style={{
                            position: 'absolute',
                            bottom: `${hoverPosition.y - 500}px`,
                            left: hoverPosition.x + 300 > window.innerWidth ? `${hoverPosition.x - 900}px` : `${hoverPosition.x}px`,
                            transform: 'translate(0, 50%)',
                            zIndex: 1000,
                            background: 'rgba(0, 0, 0, 0.8)',
                            padding: '1rem',
                            borderRadius: '8px',
                            color: '#fff',
                            pointerEvents: 'none',
                            opacity: 1,
                            visibility: 'visible',
                            minHeight: '200px',
                            // maxWidth: '300px',
                            overflow: 'hidden',
                        }}
                    >
                        <div className="info-header">
                            <h3>{hoveredMember.nickname} - {hoveredMember.name}</h3>
                            <p className="role">{hoveredMember.role}</p>
                            <p className="game">{hoveredMember.game}</p>
                        </div>
                        <div className="info-content">
                            <p className="bio">{hoveredMember.bio}</p>
                            <div className="stats">
                                <h4>Stats</h4>
                                <ul className="stats-list">
                                    <li><strong>K/D:</strong> {hoveredMember.stats.kd}</li>
                                    <li><strong>KAST:</strong> {hoveredMember.stats.kast}</li>
                                    <li><strong>Clutch Rate:</strong> {hoveredMember.stats.clutchRate}</li>
                                    <li><strong>Win Rate:</strong> {hoveredMember.stats.winRate}</li>
                                    <li><strong>First Bloods:</strong> {hoveredMember.stats.firstBloods}</li>
                                </ul>
                            </div>
                            <div className="achievements">
                                <h4>Achievements</h4>
                                {hoveredMember.achievements.map((achievement, i) => (
                                    <span key={i} className="achievement-badge">
                                        🏆 {achievement}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </section>
    );
};

export default Team;