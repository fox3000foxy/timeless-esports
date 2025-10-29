import { useState } from 'react';
import type { TeamMember } from '../data/teamData';
import { teamMembersData } from '../data/teamData';
import './Team.css';

const Team = () => {
    const [selectedMember, setSelectedMember] = useState<TeamMember | null>(null);

    const handleMemberClick = (member: TeamMember) => {
        setSelectedMember(member);
    };

    const handleCloseModal = () => {
        setSelectedMember(null);
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
                <div className="team-photo-lineup" data-aos="fade-up">
                    {teamMembersData.map((member, index) => {
                        // Configuration pour chaque membre selon leur position dans l'image
                        const configs = [
                            { scale: 0.75, zIndex: 2, left: '670px', top: '300px', height: '823px' },
                            { scale: 0.69, zIndex: 3, left: '310px', top: '330px', height: '1248px' },
                            { scale: 1, zIndex: 5, left: '0px', top: '250px', height: '1030px' },
                            { scale: 0.83, zIndex: 3, right: '240px', top: '290px', height: '1002px' },
                            { scale: 0.75, zIndex: 2, right: '690px', top: '360px', height: '923px' },
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
                                    top: config.top,
                                    '--initial-scale': config.scale
                                } as React.CSSProperties}
                                onMouseOver={(e) => {
                                    const scale = config.scale * 1.05;
                                    e.currentTarget.style.transform = `scale(${scale})`;
                                }}
                                onMouseOut={(e) => {
                                    e.currentTarget.style.transform = `scale(${config.scale})`;
                                }}
                                onClick={() => handleMemberClick(member)}
                            >
                                <img
                                    src={member.avatar}
                                    alt={`${member.name} - ${member.role}`}
                                    className="member-image"
                                    style={{
                                        height: config.height
                                    }}
                                />
                            </div>
                        );
                    })}
                </div>

                {selectedMember && (
                    <div className="modal-overlay" onClick={handleCloseModal}>
                        <div
                            className="modal-content"
                            onClick={e => e.stopPropagation()}
                            style={{
                                position: 'fixed',
                                top: '50%',
                                left: '50%',
                                transform: 'translate(-50%, -50%)',
                                zIndex: 1000,
                                background: 'rgba(0, 0, 0, 0.95)',
                                padding: '2rem',
                                borderRadius: '12px',
                                color: '#fff',
                                width: '90%',
                                // maxWidth: '800px',
                                maxHeight: '90vh',
                                overflow: 'auto',
                                border: '2px solid #ff6b35',
                                boxShadow: '0 0 30px rgba(255, 107, 53, 0.4)',
                            }}>
                            <button
                                onClick={handleCloseModal}
                                style={{
                                    position: 'absolute',
                                    right: '1rem',
                                    top: '1rem',
                                    background: 'rgba(255, 43, 43, 0.1)',
                                    border: '1px solid rgba(255, 43, 43, 0.3)',
                                    borderRadius: '50%',
                                    width: '32px',
                                    height: '32px',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    color: '#ff2b2b',
                                    fontSize: '1.2rem',
                                    cursor: 'pointer',
                                    transition: 'all 0.2s ease'
                                }}
                                onMouseOver={(e) => {
                                    e.currentTarget.style.background = 'rgba(255, 43, 43, 0.2)';
                                    e.currentTarget.style.transform = 'scale(1.1)';
                                }}
                                onMouseOut={(e) => {
                                    e.currentTarget.style.background = 'rgba(255, 43, 43, 0.1)';
                                    e.currentTarget.style.transform = 'scale(1)';
                                }}
                            >
                                ✕
                            </button>
                            <div className="info-header">
                                <h3>{selectedMember.nickname}</h3>
                                <p className="role">{selectedMember.role}</p>
                                <p className="game">{selectedMember.game}</p>
                            </div>
                            <div className="info-content">
                                <p className="bio">{selectedMember.bio}</p>
                                {selectedMember.fullStory && (
                                    <div className="full-story">
                                        <h4>Histoire</h4>
                                        <p>{selectedMember.fullStory}</p>
                                    </div>
                                )}
                                {selectedMember.playstyle && (
                                    <div className="playstyle">
                                        <h4>Style de Jeu</h4>
                                        <p>{selectedMember.playstyle}</p>
                                    </div>
                                )}
                                <div className="stats">
                                    <h4>Stats</h4>
                                    <ul className="stats-list">
                                        <li><strong>K/D:</strong> {selectedMember.stats.kd}</li>
                                        <li><strong>KAST:</strong> {selectedMember.stats.kast}</li>
                                        <li><strong>Clutch Rate:</strong> {selectedMember.stats.clutchRate}</li>
                                        <li><strong>Win Rate:</strong> {selectedMember.stats.winRate}</li>
                                        <li><strong>First Bloods:</strong> {selectedMember.stats.firstBloods}</li>
                                    </ul>
                                </div>
                                <div className="achievements">
                                    <h4>Achievements</h4>
                                    {selectedMember.achievements.map((achievement: string, i: number) => (
                                        <span key={i} className="achievement-badge">
                                            🏆 {achievement}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </section>
    );
};

export default Team;