import styles from './FeatureItem.module.css';

type FeatureItemProps = {
  title: string;
  imageSrc: string;
};

const FeatureItem = ({ title, imageSrc }: FeatureItemProps) => {
  return (
    <div className={styles.featureItem}>
      <video className={styles.featureImage} autoPlay loop muted playsInline>
        <source src={imageSrc.replace(/\.gif$/, '.webm')} type="video/webm" />
        <source src={imageSrc.replace(/\.gif$/, '.mp4')} type="video/mp4" />
        {/* fallback for very old browsers */}
        <img src={imageSrc.replace(/\.gif$/, '.jpg')} alt="FeatureItem" />
      </video>
      <div className={styles.featureTitleBg}></div>
      <h4 className={styles.featureTitle}>{title}</h4>
    </div>
  );
};

export default FeatureItem;
