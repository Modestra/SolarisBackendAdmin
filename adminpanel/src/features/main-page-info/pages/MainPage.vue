<template>
    <main class="w-full">
        <div class="catalog w-[520px] border-2 rounded-md border-second">
            <h3>Здравствуйте, уважаемый пользователь</h3>
            <p>С чего начнём?</p>
            <div class="catalog__block mt-3">
                <div class="catalog__segment rounded-md pl-2 w-full bg-second-2">
                    Создание пользователя
                </div>
            </div>
        </div>
    </main>
</template>

<script lang="ts"></script>

<style scoped lang="scss">
main{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100vh;
}
.catalog{
    display: flex;
    flex-direction: column;
    min-height: 75vh;
    padding: 16px;

    &__block{
        margin-top: 12px;
    }
    &__segment{
        display: flex;
        flex-direction: row;
        align-items: center;
        height: 36px;
    }
}
</style>
