import html2canvas from 'html2canvas';
import { useRef } from 'react';
import { useParams } from 'react-router-dom';
import { teamMembersData } from '../data/teamData';
import './InstaPost.css';

const InstaPost = () => {
    const { member } = useParams();
    const postRef = useRef<HTMLDivElement>(null);
    const selectedMember = teamMembersData.find(m => m.nickname.toLowerCase() === member?.toLowerCase());

    const capturePost = async () => {
        if (!postRef.current) return;
        
        try {
            const canvas = await html2canvas(postRef.current, {
                backgroundColor: null,
                scale: 2, // Higher quality
            });
            
            // Convert to image and download
            const image = canvas.toDataURL('image/png');
            const link = document.createElement('a');
            link.href = image;
            link.download = `${selectedMember?.nickname || 'player'}-post.avif`;
            link.click();
        } catch (error) {
            console.error('Error capturing post:', error);
        }
    };

    if (!selectedMember) {
        return (
            <div className="insta-post-error">
                <h2>Member not found</h2>
                <p>Please check the URL and try again.</p>
            </div>
        );
    }

    return (
        <div className="insta-post-container">
            <button className="screenshot-button" onClick={capturePost}>
                📸 Take Screenshot
            </button>
            <div className="insta-post-content" ref={postRef}>
                <div className="insta-post-header">
                    <div className="insta-post-user-info">
                        {/* <img 
                            src={selectedMember.avatar} 
                            alt={selectedMember.nickname} 
                            className="insta-post-avatar"
                        /> */}
                        <div className="insta-post-user-details">
                            <h2>{selectedMember.nickname}</h2>
                            <p>{selectedMember.role} • {selectedMember.game}</p>
                        </div>
                    </div>
                    <a
                        href={selectedMember.instagram}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="insta-follow-button"
                    >
                        Follow
                    </a>
                </div>

                <div className="insta-post-image">
                    <img src={selectedMember.avatar} alt={selectedMember.nickname} />
                </div>

                {/* <div className="insta-post-details">
                    <div className="insta-post-caption">
                        <h3>{selectedMember.nickname}</h3>
                        <p>{selectedMember.bio}</p>
                    </div>

                    <div className="insta-post-stats">
                        <div className="stat-item">
                            <span className="stat-label">K/D</span>
                            <span className="stat-value">{selectedMember.stats.kd}</span>
                        </div>
                        <div className="stat-item">
                            <span className="stat-label">Win Rate</span>
                            <span className="stat-value">{selectedMember.stats.winRate}</span>
                        </div>
                        <div className="stat-item">
                            <span className="stat-label">KAST</span>
                            <span className="stat-value">{selectedMember.stats.kast}</span>
                        </div>
                    </div>

                    <div className="insta-post-achievements">
                        <h4>Recent Achievements</h4>
                        <div className="achievements-list">
                            {selectedMember.achievements.map((achievement, index) => (
                                <div key={index} className="achievement-item">
                                    🏆 {achievement}
                                </div>
                            ))}
                        </div>
                    </div>
                </div> */}
            </div>
        </div>
    );
};

export default InstaPost;