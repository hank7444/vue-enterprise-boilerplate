<script>
import appConfig from '@src/app.config'
import Layout from '@layouts/main'
import BlogPost from '@components/blog-post'
import CustomInput from '@components/custom-input'

export default {
  page: {
    title: 'Home',
    meta: [
      {
        name: 'description',
        content: 'test my meta',
      },
    ],
  },
  components: { 
    Layout,
    BlogPost, 
    CustomInput,
  },
  data: function() {
    return {
      mytest: 1234,
      rawHtml: '<span style="color: red;">12341234</span>',
      dynamicId: 'myid',
      isButtonDisabled: '1234',
      isOK: false,
      message: 'Hello',
      firstName: 'hank',
      lastName: 'kuo',
      quest: '',
      answer: '',
      items: [
        { message: 'Foo' },
        { message: 'Bar' }
      ],
      object: {
        firstName: 'John',
        lastName: 'Doe',
        age: 30
      },
      todos: [
        { name: 'nameA', isComplete: true },
        { name: 'nameB', isComplete: false }
      ],
      posts: [
        { id: 1, title: 'My journey with Vue', content: 'Content1 My Content1' },
        { id: 2, title: 'Blogging with Vue', content: 'Content2 My Content2' },
        { id: 3, title: 'Why Vue is so fun', content: 'Content3 My Content3' }
      ],
      postFontSize: 1,
      searchText: 'hello',
    }
  },
  watch: {
    quest: function (newq, oldq) {
      this.answer = newq + 'aaa';
      return;
    }
  },
  computed: {
    // 计算属性的 getter
    reversedMessage: function() {
      // `this` 指向 vm 实例
      return this.message.split('').reverse().join('');
    },
    classObj: function() {

      return {
        active: this.quest === '',
        hasError: this.isOk,
      };
    },
    fullName: {
      // getter
      get: function () {

        return this.firstName + ' ' + this.lastName

      },
      // setter
      set: function (newValue) {
        var names = newValue.split(' ')
        this.firstName = names[0]
        this.lastName = names[names.length - 1]
      }
    },
  },
  methods: {
    doSomething() {
      this.mytest += 5
    },
    updateName(name) {
      this.fullName = name;
    },
    greet(msg, event) {
      alert(msg);
    },
    enlargeText(value) {
      this.postFontSize += value;
    }
  },
}
</script>

<template>
  <Layout>
    <h1>Home Page</h1>
    <input type="text" v-model="quest" />
    <p>{{ answer }}</p>
    <img
      src="@assets/images/logo.png"
      alt="Logo"
    >
    <p>{{ mytest + 1 }} {{ isOK ? 'YES' : 'No' }}</p>
    <p>Using v-html directive: <span v-html="rawHtml"/></p>
    <div :id="`list-${dynamicId}`" :disabled="isButtonDisabled">
      test bind
    </div>
    <template v-if="isOK === false">
      <p>现在你看到我了</p>
      <p>Paragraph 1</p>
      <p>Paragraph 2</p>
    </template>
    <template v-else>
      <p>现在你看到我了 (else)</p>
      <p>Paragraph 1 else</p>
      <p>Paragraph 2 else</p>
    </template>
    <p v-show="isOK">hahah</p>
    <p>Computed reversed message: "{{ reversedMessage }}"</p>
    <p class="static" :class="classObj">{{fullName}}</p>
    <button @click.prevent="updateName('mary la')"/>

    <button @click="greet('hi', $event)">greet</button>
    <!--
    <ul id="example-1">
      <li v-for="(item, index) in items" :key="index">
        {{ item.message }} - {{ index }}
      </li>
    </ul>
    
    <ul>
      <li v-for="todo in todos" v-if="todo.isComplete">
        {{ todo }}
      </li>
    </ul>
  
    <div :style="{ fontSize: postFontSize + 'em' }">
    <BlogPost 
      v-for="post in posts"
      :post="post"
      @enlarge-text="enlargeText"
    />
    </div>
    -->

    <CustomInput v-model="searchText">
      hihi my how are you
    </CustomInput>

   
  </Layout>
</template>
