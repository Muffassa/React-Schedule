// @flow weak
import React, { Component } from 'react';
import AppBar from 'material-ui/AppBar';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Toolbar from 'material-ui/Toolbar';
import Button from 'material-ui/Button';
import Drawer from 'material-ui/Drawer';
import List, { ListItem } from 'material-ui/List';

import './App.css';

interface IState {
  isOpenDrawer: boolean,
}

interface IListItem {
  title: string,
  subtitles: Array<string>,
}

class App extends Component<{}, IState> {
  static renderList(): Array<ListItem> {
    const listItems: Array<IListItem> = [
      {
        title: 'Панели',
        subtitles: ['Панель управления'],
      },
      {
        title: 'Управление данными',
        subtitles: ['Учебные специальности', 'Учебные взвода', 'Виды занятий', 'Дисциплины', 'Преподаватели'],
      },
      {
        title: 'Статистика',
        subtitles: ['Статистика по преподавателям', 'Статистика по взводам'],
      },
      {
        title: 'Настройки',
        subtitles: [],
      },
    ];
    return listItems.map((listItem) => {
      const subtitles = listItem.subtitles.map((subtitle) => (
        <ListItem button style={{ paddingTop: '25px', paddingBottom: '25px' }}>
          {subtitle}
        </ListItem>
      ));
      return (
        <div>
          <ListItem divider style={{ opacity: '0.6' }}>
            {listItem.title}
          </ListItem>
          {subtitles}
        </div>
      );
    });
  }

  constructor() {
    super();
    this.state = {
      isOpenDrawer: false,
    };
  }

  openDrawer(): void {
    this.setState({ isOpenDrawer: true });
  }

  closeDrawer(): void {
    this.setState({ isOpenDrawer: false });
  }

  render() {
    return (
      <MuiThemeProvider>
        <div>
          <AppBar position="static">
            <Toolbar>
              <Button raised onClick={() => this.openDrawer()}>
                Button
              </Button>
            </Toolbar>
          </AppBar>
          <Drawer
            open={this.state.isOpenDrawer}
            onRequestClose={() => this.closeDrawer()}
            onClick={() => this.closeDrawer()}
          >
            <List>{App.renderList()}</List>
          </Drawer>
        </div>
      </MuiThemeProvider>
    );
  }
}
export default App;
