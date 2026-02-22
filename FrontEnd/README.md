# Gamblify Casino Frontend
<img width="1918" height="906" alt="screen" src="https://github.com/user-attachments/assets/1f194beb-dbe3-47ed-ad30-b734bf03c0a5" />

A comprehensive online casino and gaming platform built with React, featuring casino games, sports betting, NFT marketplace, and more.

## 🎰 Features

### Casino Games
- **Slots** - Various slot machine games
- **Blackjack** - Classic card game
- **Roulette** - European and American roulette variants
- **Live Casino** - Real-time casino games with live dealers
- **Game Shows** - Interactive game show experiences
- **Bonus Battles** - Competitive gaming tournaments
- **Challenges** - Special gaming challenges and missions
- **AK Originals** - Exclusive games from the platform

### Sports Betting
- **Sports** - Comprehensive sports betting platform
- **My Bets** - Track and manage your betting history
- **Live Betting** - Real-time sports betting opportunities

### NFT Marketplace
- **Marketplace** - Buy and sell NFTs
- **NFT Portfolio** - Manage your NFT collection
- **NFT Loans** - Lending and borrowing NFT assets
- **Lootboxes** - Gamified NFT acquisition
- **Rollbots & Sportsbots** - AI-powered trading bots
- **External NFT Integration** - Connect with external NFT platforms

### Additional Features
- **Crypto Portfolio** - Manage cryptocurrency holdings
- **Clans** - Social gaming groups
- **Jackpot Games** - Progressive jackpot opportunities
- **AK Lottery** - Lottery-style games
- **Streams** - Live streaming integration
- **Race 25K** - Competitive racing events

## 🛠️ Tech Stack

- **Frontend**: React 18.2.0
- **Routing**: React Router DOM 6.15.0
- **Styling**: 
  - Tailwind CSS 3.3.3
  - Styled Components 6.0.8
  - Material-UI 5.14.13
  - Emotion (React/Styled) 11.11.0
- **Form Handling**: Formik 2.4.5 with Yup validation
- **UI Components**: Headless UI 1.7.17
- **Carousel**: React Slick 0.29.0
- **Build Tool**: Create React App 5.0.1

## 🚀 Getting Started

### Prerequisites
- Node.js (version 14 or higher)
- npm or yarn package manager

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd rollbit-clone
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Start the development server**
   ```bash
   npm start
   # or
   yarn start
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000) to view the application.

## 📜 Available Scripts

### `npm start`
Runs the app in development mode. The page will reload when you make changes and display any lint errors in the console.

### `npm test`
Launches the test runner in interactive watch mode. See the [running tests](https://facebook.github.io/create-react-app/docs/running-tests) documentation for more information.

### `npm run build`
Builds the app for production to the `build` folder. It correctly bundles React in production mode and optimizes the build for the best performance. The build is minified and filenames include hashes for caching.

### `npm run eject`
**Note: This is a one-way operation. Once you eject, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can eject at any time. This command will remove the single build dependency from your project and copy all configuration files and dependencies into your project.

## 🏗️ Project Structure

```
src/
├── components/
│   ├── Common/           # Reusable UI components
│   ├── home/             # Main application components
│   │   ├── header/       # Navigation and header components
│   │   ├── Account/      # User account management
│   │   ├── ChatBox/      # Live chat functionality
│   │   ├── Footer/       # Footer component
│   │   └── MainHome/     # Main layout components
│   ├── LoginAndRgister/  # Authentication components
│   ├── Modals/           # Modal dialogs
│   ├── models/           # Data models and utilities
│   ├── Pages/            # Page components
│   │   ├── Casino/       # Casino game pages
│   │   ├── NFT/          # NFT marketplace pages
│   │   ├── Sports/       # Sports betting pages
│   │   └── Other/        # Additional pages
│   └── Router/           # Routing configuration
├── hooks/                # Custom React hooks
├── assets/               # Static assets
│   ├── font/            # Custom fonts
│   ├── images/          # Image assets
│   └── MockData/        # Sample data for development
└── App.js               # Main application component
```

## 🎨 Customization

### Fonts
The application uses custom Geogrotesque fonts located in `src/assets/font/`. These fonts provide a modern, gaming-focused aesthetic.

### Styling
- **Tailwind CSS**: Utility-first CSS framework for rapid UI development
- **Styled Components**: CSS-in-JS for component-specific styling
- **Material-UI**: Pre-built components for consistent design
- **Custom Themes**: Extensible color schemes and design tokens

## 🔧 Configuration

### Tailwind CSS
The project uses Tailwind CSS with container queries plugin. Configuration can be found in `tailwind.config.js`.

### Environment Variables
Create a `.env` file in the root directory for environment-specific configuration:

```env
REACT_APP_API_URL=your_api_url_here
REACT_APP_ENVIRONMENT=development
```

## 🚀 Deployment

### Build for Production
```bash
npm run build
```

This creates a `build` folder with optimized production files ready for deployment.

### Deployment Options
The built application can be deployed to various platforms:
- **Netlify**: Drag and drop the `build` folder
- **Vercel**: Connect your GitHub repository
- **AWS S3**: Upload the `build` folder contents
- **Traditional hosting**: Upload files via FTP

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 🆘 Support

For support and questions:
- Create an issue in the repository
- Contact the development team
- Check the documentation for common issues

## 🔗 Links

- [React Documentation](https://reactjs.org/)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [Material-UI Documentation](https://mui.com/)
- [React Router Documentation](https://reactrouter.com/)

---

**Note**: This is a casino gaming platform. Please ensure compliance with local gambling laws and regulations in your jurisdiction.
