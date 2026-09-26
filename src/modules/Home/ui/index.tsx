import * as styles from './styles.js';
import { useHome } from '../presenters/useHome.ts';

const addIcon = (
  <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <line x1="12" y1="5" x2="12" y2="19" />
    <line x1="5" y1="12" x2="19" y2="12" />
  </svg>
);

const logoutIcon = (
  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#93A69A" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <path d="M9 21H5a2 2 0 01-2-2V5a2 2 0 012-2h4" />
    <polyline points="16 17 21 12 16 7" />
    <line x1="21" y1="12" x2="9" y2="12" />
  </svg>
);

const checkIcon = (
  <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="#06130B" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="20 6 9 17 4 12" />
  </svg>
);

function Home({ user }: { user: string }) {
  const { userData, handleLogout } = useHome(user);

  return (
    <div style={styles.page as React.CSSProperties}>
      <div style={styles.glow as React.CSSProperties}></div>

      <div style={styles.headerBar as React.CSSProperties}>
        <div style={styles.logoRow as React.CSSProperties}>
          <div style={styles.logoMark as React.CSSProperties}>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#06130B" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="20 6 9 17 4 12" />
            </svg>
          </div>
          <span style={styles.logoText as React.CSSProperties}>Todo.</span>
        </div>

        <div style={styles.headerRight as React.CSSProperties}>
          <span style={styles.userEmail as React.CSSProperties}>{userData.email}</span>
          <div style={styles.divider as React.CSSProperties}></div>
          <button style={styles.logoutButton as React.CSSProperties} onClick={handleLogout}>
            {logoutIcon}
            Вийти
          </button>
        </div>
      </div>

      <div style={styles.content as React.CSSProperties}>
        <h1 style={styles.greeting as React.CSSProperties}>Привіт, {userData.email.split('@')[0]}!</h1>
        <p style={styles.greetingSubtitle as React.CSSProperties}>У тебе сьогодні 5 активних завдань. Гарного темпу.</p>

        <div style={styles.statsRow as React.CSSProperties}>
          <div style={styles.statCard as React.CSSProperties}>
            <div style={styles.statCardTop as React.CSSProperties}>
              <span style={styles.statLabel as React.CSSProperties}>Всього завдань</span>
            </div>
            <div style={styles.statValue as React.CSSProperties}>12</div>
          </div>
          <div style={styles.statCard as React.CSSProperties}>
            <div style={styles.statCardTop as React.CSSProperties}>
              <span style={styles.statLabel as React.CSSProperties}>Виконано</span>
            </div>
            <div style={styles.statValueAccent as React.CSSProperties}>7</div>
          </div>
          <div style={styles.statCard as React.CSSProperties}>
            <div style={styles.statCardTop as React.CSSProperties}>
              <span style={styles.statLabel as React.CSSProperties}>У процесі</span>
            </div>
            <div style={styles.statValue as React.CSSProperties}>5</div>
          </div>
        </div>

        <div style={styles.quickAddRow as React.CSSProperties}>
          <div style={styles.quickAddInputWrapper as React.CSSProperties}>
            <span style={styles.quickAddIcon as React.CSSProperties}>{addIcon}</span>
            <input style={styles.quickAddInput as React.CSSProperties} placeholder="Додати нове завдання..." />
          </div>
          <button style={styles.quickAddButton as React.CSSProperties}>Додати</button>
        </div>

        <div style={styles.taskListCard as React.CSSProperties}>
          <div style={styles.taskListHeader as React.CSSProperties}>
            <h3 style={styles.taskListTitle as React.CSSProperties}>Сьогодні</h3>
            <span style={styles.taskCountBadge as React.CSSProperties}>3 завдання</span>
          </div>

          <div style={styles.taskRow as React.CSSProperties}>
            <div style={styles.checkboxDone as React.CSSProperties}>{checkIcon}</div>
            <span style={styles.taskTextDone as React.CSSProperties}>Підготувати презентацію для клієнта</span>
            <span style={styles.taskTag('#3DDC84', 'rgba(61,220,132,0.12)') as React.CSSProperties}>Робота</span>
            <span style={styles.taskTime as React.CSSProperties}>10:00</span>
          </div>

          <div style={styles.taskRow as React.CSSProperties}>
            <div style={styles.checkboxEmpty as React.CSSProperties}></div>
            <span style={styles.taskText as React.CSSProperties}>Зустріч з командою розробки</span>
            <span style={styles.taskTag('#7EA8FF', 'rgba(93,151,255,0.14)') as React.CSSProperties}>Мітинг</span>
            <span style={styles.taskTime as React.CSSProperties}>14:30</span>
          </div>

          <div style={styles.taskRowLast as React.CSSProperties}>
            <div style={styles.checkboxEmpty as React.CSSProperties}></div>
            <span style={styles.taskText as React.CSSProperties}>Оновити дизайн профілю користувача</span>
            <span style={styles.taskTag('#FFB74D', 'rgba(255,183,77,0.14)') as React.CSSProperties}>Дизайн</span>
            <span style={styles.taskTime as React.CSSProperties}>18:00</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;